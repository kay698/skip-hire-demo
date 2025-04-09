import React from "react";
import { IconType } from "react-icons";
import { Flex } from "../Box/box.styles";
import { RiArrowRightWideFill } from "react-icons/ri";
import { SkipSelectCardWrap } from "./skipSelectCard.styles";

interface SkipSelectCardItem {
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  created_at: string;
  forbidden: boolean;
  hire_period_days: number;
  id: number;
  per_tonne_cost: number;
  postcode: string;
  price_before_vat: number;
  size: number;
  transport_cost: number;
  updated_at: string;
  vat: number;
}

interface SkipSelectCardProps {
  SkipSelectCardData: SkipSelectCardItem[];
  setIsCardSelected: (id: number) => void;
  isCardSelected: number;
}

const SkipSelectCard = ({ SkipSelectCardData }: SkipSelectCardProps) => {
  console.log(SkipSelectCardData, "SkipSelectCardData");
  return (
    <SkipSelectCardWrap>
      <Flex className="skip-select-card-sub">hello</Flex>
    </SkipSelectCardWrap>
  );
};

export default SkipSelectCard;
