import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>吉島彰宏</title>
      </Head>
      <Box m="0 auto" p={{ base: "40px 30px", md: "40px 60px" }}>
        <Heading mb={10}>吉島彰宏</Heading>

        <Text mb={10} fontSize={{ base: "md", md: "lg" }} wordBreak="keep-all">
          スタートアップのサクセスアドバイザー.
          <br />
          VCを経て2009年に独立. ファイナンスが専門.
          <br />
          8年間でシード〜シリーズGまで, 20件以上のラウンドを実施中.
          <br />
          創業期から帯同, note, トレタ, クラウドクレジット, DrJOY, ワンダープラネット,
          JARMECに関与.
        </Text>

        <Box mb={10}>
          <Flex align="center">
            <StopRoundedIcon fontSize="small" />
            <Text>e-mail</Text>
          </Flex>
          <Text pl={1}>yoshijima@y-associates.net</Text>
        </Box>

        <Box>
          <Box
            as="a"
            href="https://twitter.com/yoshijima_a/"
            _hover={{ opacity: 0.7 }}
            mr={4}
          >
            <TwitterIcon />
          </Box>
          <Box
            as="a"
            href="https://www.facebook.com/akihiro.yoshijima/"
            _hover={{ opacity: 0.7 }}
          >
            <FacebookIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
