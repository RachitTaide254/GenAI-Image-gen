import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton"

function App() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState("");
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadingCompo = () => {
    return (
    <div>
      Image generating....Please wait!!! 
    </div>
    )
  };
  //console.log(add,'sdf')

  const fetch = async () => {
    setLoading(true)
    const response = await axios.post("http://localhost:3002/api/submit", {
      add,
    });
    if (response.data.success) {
      console.log(response.data.data, "sdfasd");
      setImg(response.data.data);
      setLoading(false);
    }
  };
  //console.log(img, "img[0]?.urlimg[0]?.url");
  return (
    <>
      <h1 className="header">AI Image Generator</h1>
      {img.length !== 0 && <div>
        <a>
        <div className="skel">
          <img src={img[0]?.url} className="logo" alt="Vite logo" />
        </div>
        </a>
      </div>}
    {
      loading &&  
    //   <div className="loading">
    //   Image generating....Please wait!!! 
    // </div>
    <div className="skel">
    <Skeleton className="w-[400px] h-[220px] " />
    </div>
    }
      <div className="input">
        <Input
          type="text"
          placeholder="Enter description of image you want"
          onChange={(e) => setAdd(e.target.value)}
        />
      </div>

      <div className="btn">
        <Button
          onClick={() => {
            fetch();
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default App;
