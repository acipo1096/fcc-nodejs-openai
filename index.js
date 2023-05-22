import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

// Build the OpenAI Configuration
// Creates a new instance of the Configuration object
const configuration = new Configuration({
    organization: "Need to create account",
    apiKey: "Need to create account"
});

// Create new instance of OpenAI API:
const openai = new OpenAIApi(Configuration);

// Calls the createChatCompletion function that triggers an API endpoint
// Each message is an object containing the role (who sent the message) - could be from the AI or the human user
// The code prints the response from the AI

opena
    .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello"}]
    })
    .then((res) => {
        console.log(res.data.choices[0].message.content);
    })
    .catch((e) => {
        console.log(e);
    });

/*
About .then(res)
Javascript fetch function asynchronously pulls a resource from the specified url.
Meanwhile fetch returns a Promise.
Promise helps with the asynchronous part and runs the function passed into then (res => res.json()) once the resource is loaded with the fetched resource as parameter. The fetched resource can be parsed using json() if it is JSON formatted.
then also returns a Promise making it chainable.
*/
    
