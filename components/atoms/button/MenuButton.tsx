import { VFC, ReactNode } from "react";
import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  children: ReactNode;
  hrefs: string;
  onClose: () => void;
};

export const MenuButton: VFC<Props> = (props) => {
  const { children, hrefs, onClose } = props;
  return (
    <Link as={NextLink} href={hrefs}>
      <Button
        w="100%"
        h={{ base: "70px", sm: "80px", md: "100px" }}
        color="white"
        bg="gray.900"
        fontSize="lg"
        onClick={onClose}
        _hover={{ opacity: 0.5 }}
        _focus={{ boxShadow: "none" }}
        _active={{ _active: "none" }}
      >
        {children}
      </Button>
    </Link>
  );
};
