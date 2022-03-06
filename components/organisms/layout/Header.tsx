import React, { VFC } from "react";
import { Box, Flex, useDisclosure, Text } from "@chakra-ui/react";

import { MenuIcon } from "../../atoms/button/MenuIcon";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Flex
        bg="gray.900"
        color="white"
        align="center"
        justify="space-between"
        p={{ base: 4, md: 6 }}
      >
        <Flex align="center" cursor="default">
          <Box fontSize={{ base: "2xl", md: "4xl" }} fontWeight={700}>
            <Text>STARTUP SUCCESS ADVISOR</Text>
          </Box>
        </Flex>

        <MenuIcon onOpen={onOpen} />
      </Flex>

      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </header>
  );
};
