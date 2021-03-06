import React, { VFC } from "react";
import { Box, Text } from "@chakra-ui/react";

export const Footer: VFC = () => {
  return (
    <footer style={{ position: "relative", bottom: 0, width: "100%" }}>
      <Box bg="gray.900" color="white" padding={2}>
        <Text fontSize="sm" textAlign="right" mr={3}>
          © 2022 Ibuki-Y inc.
        </Text>
      </Box>
    </footer>
  );
};
