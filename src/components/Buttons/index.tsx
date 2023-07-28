import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type TButton = {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Buttons: React.FC<TButton> = ({
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <Button
      variant="outline"
      borderColor="gray.400"
      bg="white.400"
      color="white.200"
      _disabled={{
        borderColor: "red.200",
        bg: "gray",
        color: "white.400",
      }}
      w="48"
      h="12"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default Buttons;
