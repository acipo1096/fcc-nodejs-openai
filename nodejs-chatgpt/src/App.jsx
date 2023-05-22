import {useState} from React;
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-KJP6A7rCJ356baNwD5SRzU1Y",
  apiKey: "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"
});

// Create new instance of OpenAI API:
const openai = new OpenAIApi(configuration);

function App() {

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // The message will hold info sent from the app to the AI
  // The chats array keeps track of all messages sent by both parties (user and AI)
  // isTyping variable notifies the user whether the bot is typing or not

  return(
    <main>
      <h1>Chat AI Tutorial</h1>
    </main>
  )
}

export default App;