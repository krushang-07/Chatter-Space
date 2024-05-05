import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/other/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
      </Box>
    </div>
  );
};

export default Chatpage;
