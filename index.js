import { Configuration, OpenAIApi } from "openai";
import express from 'express';

const configuration = new Configuration({
    organization: "org-keCGJ4YMZhUMtiCgsAT82BfQ",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Create a simple express Api that calls the function above


const app = express()
const port = 3001

app.post('/', async (req,res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log(response.data.choices[0].text)
    res.json({
        data: response.data
    })
}) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
