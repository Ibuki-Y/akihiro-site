import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Text, Box, Flex, Link } from "@chakra-ui/react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import DescriptionIcon from "@mui/icons-material/Description";

import { ProfileTitle } from "../components/atoms/ProfileTitle";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>吉島彰宏</title>
      </Head>

      <main>
        <Box p={{ base: "40px 20px", md: "60px 100px" }}>
          <Heading mb={{ base: 8, md: 10 }}>吉島彰宏</Heading>

          <Text
            mb={10}
            fontWeight={400}
            fontSize={{ base: "md", md: "lg" }}
            wordBreak="keep-all"
          >
            <Box mb={10}>
              <ProfileTitle title="仕事" />
              スタートアップのサクセスアドバイザー
              <br />
              専門はファイナンス
              <br />
              過去8年間でシードからシリーズGまで20ラウンド以上をサポート
              <br />
              調達資金の多くを人件費に使うため人材の力をいかに引き出すかにも携わる
            </Box>

            <Box mb={10}>
              <ProfileTitle title="経歴" />
              上智大学卒業
              <br />
              VCを経て2009年に独立
            </Box>

            <Box mb={10}>
              <ProfileTitle title="特徴" />
              創業期から帯同することが多く
              <br />
              関わる会社の長期的サクセスを目的に活動
            </Box>

            <Box mb={10}>
              <ProfileTitle title="関与" />
              note&ensp;トレタ&ensp;クラウドクレジット&ensp;Dr.JOY&ensp;ワンダープラネット&ensp;JARMEC
            </Box>

            <Box>
              <ProfileTitle title="E-mail" />
              yoshijima@y-associates.net
            </Box>
          </Text>

          <Flex>
            <Link
              as="a"
              href="https://yoshijima.me/"
              _hover={{ opacity: 0.7 }}
              _focus={{ _focus: "none" }}
              mr={4}
            >
              <DescriptionIcon />
            </Link>
            <Link
              as="a"
              href="https://twitter.com/yoshijima_a/"
              _hover={{ opacity: 0.7 }}
              _focus={{ _focus: "none" }}
              mr={4}
            >
              <TwitterIcon />
            </Link>
            <Link
              as="a"
              href="https://www.facebook.com/akihiro.yoshijima/"
              _hover={{ opacity: 0.7 }}
              _focus={{ _focus: "none" }}
            >
              <FacebookIcon />
            </Link>
          </Flex>
        </Box>
      </main>
    </>
  );
};

export default Home;
