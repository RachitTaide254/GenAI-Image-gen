const { Configuration, OpenAI }= require("openai");


const OPENAI_API_KEY = "";

exports.submit = async (req, res) => {
    try{
        
        const { add } = req.body;
        //console.log(req.body,'kop');
        
        // const configuration = new Configuration({
        //     apiKey: OPENAI_API_KEY,
        //   });
        const openai = new OpenAI({apiKey: OPENAI_API_KEY,});

        const image = await openai.images.generate({
            model: "dall-e-3",
            prompt: add,
            n:1
        });
        
        //console.log(image.data);
        return res.json({
            success:true,
            data:image.data
        })
        
    }catch(e){
        console.log(e,"err insj")
    }
};
