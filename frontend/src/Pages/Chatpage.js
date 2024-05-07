import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/other/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import MyChat from "../components/MyChat";
import ChatBox from "../components/ChatBox";
const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChat />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
