import { useState } from "react";
import { TPlayerModalProps } from "@/types";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  FormLabel,
  ModalFooter,
} from "@chakra-ui/react";
import Buttons from "../Buttons";

const PlayerModal: React.FC<TPlayerModalProps> = ({
  isOpen,
  onClose,
  onStartGame,
}) => {
  const [input, setInput] = useState("");

  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleStartGame = () => {
    if (input === "") {
      return;
    }
    onStartGame(input);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Let&apos;s Begin!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Player Name:</FormLabel>
          <Input
            placeholder="Enter your name"
            value={input}
            onChange={handlePlayerNameChange}
            type="text"
          />
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <Buttons onClick={handleStartGame}>Start</Buttons>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PlayerModal;
