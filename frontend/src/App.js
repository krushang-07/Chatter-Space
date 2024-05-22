import "./App.css";
import { Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>
    </ChatProvider>
  );
}

export default App;
 