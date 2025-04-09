import Lottie from "lottie-react";
import { Flex } from "../Box/box.styles";

export const Loader = () => {
  return (
    <Flex height="30rem" justifyContent="center">
      <Lottie
        animationData={""}
        loop={true}
        autoplay={true}
        style={{ width: "10%" }}
      />
    </Flex>
  );
};
