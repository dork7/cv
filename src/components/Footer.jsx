import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import MediaLinks from "./MediaLinks";
const Footer = () => {
  return (
    <Box
      pt={4}
      mt={22}
      bg={useColorModeValue("gray.50", "footerColor")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack spacing={0}>
        <MediaLinks />
        <Text fontSize="xs" color={"gray.500"} textAlign={"center"}>
          © 2022, All rights reserved
        </Text>
        <Text fontSize="xs" color={"gray.500"} textAlign={"center"} pb={2}>
          If it's working, do not touch it
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
