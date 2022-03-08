import { VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const ProfileTitle: VFC<Props> = (props) => {
  const { title } = props;
  return <Text fontWeight={600}>{title}</Text>;
};
