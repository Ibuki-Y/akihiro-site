import { VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIcon: VFC<Props> = (props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="lg"
      variant="unstyled"
      onClick={onOpen}
      _hover={{ opacity: 0.5 }}
      _focus={{ _focus: "none" }}
    />
  );
};
