import "./App.css";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Homepage from "./Pages/Homepage";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <ChatProvider>
     <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div> 
    </ChatProvider>
    
  );
}

export default App;
