import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px" borderRadius="40px">
          {/* <ModalHeader
            fontSize="30px"
            // fontFamily="Work sans"
            // font-family= "Oxygen"
            // font-weight="900"
            // font-style="normal"
            display="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader> */}
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="70px"
              boxSize="170px"
              src={user.pic}
              alt={user.name}
            />
              <ModalHeader
            fontSize="35px"
            // fontFamily="Work sans"
            // font-family= "Oxygen"
            // font-weight="900"
            // font-style="normal"
            display="flex"
            justifyContent="center"
          >
            {user.name}
            </ModalHeader>
            
            <Text
              fontSize={{ base: "20px", md: "30px" }}
              fontFamily="Work sans"
              fontWeight="bolder"
            >
              Email : {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
