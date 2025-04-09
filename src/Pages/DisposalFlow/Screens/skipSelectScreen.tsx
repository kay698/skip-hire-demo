import React, { useEffect, useState } from "react";
import { Flex } from "../../../Components/Box/box.styles";
import axios from "axios";
import { Loader } from "../../../Components/Loader/loader";
import SkipSelectCard from "../../../Components/SkipSelectCard/skipSelectCard";
import ProceedPopup from "../../../Components/ProceedPopUp/proceedPopUp";
import NoDataImage from "../../../assets/nodata.svg";

interface SkipSelectCardItem {
  allowed_on_road?: boolean;
  allows_heavy_waste?: boolean;
  area?: string;
  created_at?: string;
  forbidden: boolean;
  hire_period_days?: number;
  id?: number;
  per_tonne_cost?: number;
  postcode?: string;
  price_before_vat?: number;
  size?: number;
  transport_cost?: number;
  updated_at?: string;
  vat?: number;
}
const SkipSelectScreen = () => {
  const [skipSelectData, setSkipSelectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCardSelected, setIsCardSelected] = useState<
    SkipSelectCardItem | any
  >({});

  useEffect(() => {
    getSkipData();
  }, []);

  const getSkipData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      setSkipSelectData(response.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };
  return (
    <Flex
      margin={isCardSelected.id ? "0 0 5rem 0" : "0"}
      mobileMargin={isCardSelected.id ? "0 0 8rem 0" : "0"}
    >
      <Flex className="disposal-flow-header">
        <h1 className="header-text">Choose Your Skip Size</h1>
        <p className="sub-header-text">
          Select the skip size that best suits your needs
        </p>
      </Flex>

      {isLoading ? (
        <Loader />
      ) : skipSelectData?.length === 0 ? (
        <Flex
          className="skip-select-cards-wrap"
          height="30rem"
          flexDir="column"
          justifyContent="center"
        >
          <img src={NoDataImage} alt="empty" />
          <p>Skip Sizes Will Be Diplayed Here</p>{" "}
        </Flex>
      ) : (
        <Flex className="skip-select-cards-wrap">
          {skipSelectData.map((item, idx) => (
            <SkipSelectCard
              skipSelectCardData={item}
              key={idx}
              isCardSelected={isCardSelected}
              setIsCardSelected={setIsCardSelected}
            />
          ))}
        </Flex>
      )}

      <ProceedPopup
        setIsCardSelected={setIsCardSelected}
        isCardSelected={isCardSelected}
      />
    </Flex>
  );
};
export default SkipSelectScreen;
