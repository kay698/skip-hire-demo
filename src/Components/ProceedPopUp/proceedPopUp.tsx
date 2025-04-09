import React from "react";
import { Flex } from "../Box/box.styles";
import { Button } from "../Button/button.styles";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { ProceedPopupWrap } from "./proceedPopUp.styles";

interface SkipSelectCardItem {
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  forbidden: boolean;
  hire_period_days: number;
  id: number;
  price_before_vat: number;
  size: number;
}

interface SkipSelectCardProps {
  setIsCardSelected: (id: SkipSelectCardItem | any) => void;
  isCardSelected: SkipSelectCardItem | any;
}

const ProceedPopup = ({
  isCardSelected,
  setIsCardSelected,
}: SkipSelectCardProps) => {
  const ArrowIcon = IoIosArrowRoundForward as React.ComponentType<{
    className?: string;
  }>;

  return (
    <ProceedPopupWrap
      translate={!!isCardSelected.id ? "traslateY(0)" : "translateY(10rem)"}
    >
      <Flex className="popup-text-wrap">
        <span>{isCardSelected.size} Yard Skip</span>/
        <span className="hire-peroid">
          {isCardSelected.hire_period_days} day hire
        </span>
        /
        <h2 className="price-per-week">
          &#163;
          {isCardSelected.price_before_vat} <span>per week</span>
        </h2>
      </Flex>

      <Flex className="popup-button-wrap">
        <Button
          onClick={() => setIsCardSelected({})}
          width="8rem"
          height="2.8rem"
        >
          Back
        </Button>

        <Button
          onClick={() => setIsCardSelected({})}
          width="12rem"
          height="2.8rem"
          background="#ea9a20"
          hoverBg="#bc7407"
        >
          Continue <ArrowIcon />
        </Button>
      </Flex>
    </ProceedPopupWrap>
  );
};

export default ProceedPopup;
