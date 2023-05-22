import {useState} from React;
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-KJP6A7rCJ356baNwD5SRzU1Y",
  apiKey: "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"
});

// Create new instance of OpenAI API:
const openai = new OpenAIApi(configuration);

function() App {
  return(
    <main>
      <h1>Chat AI Tutorial</h1>
    </main>
  )
}

export default App;