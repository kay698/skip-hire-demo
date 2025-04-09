import React from "react";
import { Flex } from "../Box/box.styles";
import { SkipSelectCardWrap } from "./skipSelectCard.styles";
import { Button } from "../Button/button.styles";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";

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
  skipSelectCardData: SkipSelectCardItem;
  setIsCardSelected: (id: SkipSelectCardItem | any) => void;
  isCardSelected: SkipSelectCardItem | any;
}

const SkipSelectCard = ({
  skipSelectCardData,
  isCardSelected,
  setIsCardSelected,
}: SkipSelectCardProps) => {
  const ArrowIcon = IoIosArrowRoundForward as React.ComponentType<{
    className?: string;
  }>;
  const Warning = IoWarningOutline as React.ComponentType<{
    className?: string;
  }>;

  const handleSelectCard = () => {
    isCardSelected.id === skipSelectCardData.id
      ? setIsCardSelected({})
      : setIsCardSelected(skipSelectCardData);
  };

  return (
    <SkipSelectCardWrap onClick={handleSelectCard}>
      <Flex className="skip-select-card-sub">
        <Flex className="skip-select-card-textsection">
          {!!skipSelectCardData.allowed_on_road && (
            <small className="private-property-warning">
              <Warning /> Private Property Only
            </small>
          )}
          <h2>{skipSelectCardData.size} Yard Skip</h2>
          <span className="hire-peroid">
            {skipSelectCardData.hire_period_days} day hire period
          </span>

          <h2 className="price-per-week">
            &#163;
            {skipSelectCardData.price_before_vat} <span>per week</span>
          </h2>
        </Flex>
      </Flex>
      <Flex padding=".5rem">
        <Button
          background={
            isCardSelected.id === skipSelectCardData.id ? "#ea9a20" : "#2d2e2f"
          }
          hoverBg={
            isCardSelected.id === skipSelectCardData.id
              ? "#bc7407"
              : "#565657e0"
          }
        >
          Select This Skip <ArrowIcon />
        </Button>
      </Flex>
    </SkipSelectCardWrap>
  );
};

export default SkipSelectCard;
