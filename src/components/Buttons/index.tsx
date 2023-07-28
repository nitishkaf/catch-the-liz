import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type TButton = {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Buttons: React.FC<TButton> = ({ disabled, onClick, children }) => {
  return (
    <Button
      variant="outline"
      borderColor="gray.400"
      bg="white.400"
      color="white.200"
      _disabled={{
        borderColor: "gray.600",
        bg: "gray.600",
        color: "white.400",
      }}
      w="48"
      h="12"
      onClick={onClick}
      isDisabled={disabled}
    >
      {children}
    </Button>
  );
};

export default Buttons;
