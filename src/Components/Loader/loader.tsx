import Lottie from "lottie-react";
import { Flex } from "../Box/box.styles";
import LoaderLottie from "../../assets/loader.json";

export const Loader = () => {
  return (
    <Flex height="30rem" justifyContent="center">
      <Lottie
        animationData={LoaderLottie}
        loop={true}
        autoplay={true}
        style={{ width: "10%" }}
      />
    </Flex>
  );
};
