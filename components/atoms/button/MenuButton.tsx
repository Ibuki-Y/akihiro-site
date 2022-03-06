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
        h="100px"
        _focus={{ _focus: "none" }}
        color="white"
        bg="gray.900"
        fontSize="lg"
        onClick={onClose}
        _hover={{opacity: 0.5}}
        _active={{opacity: 0.2}}
      >
        {children}
      </Button>
    </Link>
  );
};
