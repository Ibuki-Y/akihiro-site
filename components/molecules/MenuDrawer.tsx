import { VFC } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex } from "@chakra-ui/react";

import { MenuButton } from "../atoms/button/MenuButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: VFC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0}  bg="gray.900">
            <Flex justify="center" align="center" direction="column">
              <MenuButton hrefs="/" onClose={onClose}>
                Top
              </MenuButton>
              <MenuButton hrefs="https://yoshijima.me/" onClose={onClose}>
                note
              </MenuButton>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
