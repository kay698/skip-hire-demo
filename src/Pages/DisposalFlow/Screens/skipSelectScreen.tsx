import React, { useEffect, useState } from "react";
import { Flex, Grid } from "../../../Components/Box/box.styles";
import axios from "axios";
import { Loader } from "../../../Components/Loader/loader";
import SkipSelectCard from "../../../Components/SkipSelectCard/skipSelectCard";

const SkipSelectScreen = () => {
  const [skipSelectData, setSkipSelectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCardSelected, setIsCardSelected] = useState(-1);

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
  if (isLoading) <Loader />;
  return (
    <Flex>
      <Flex className="disposal-flow-header">
        <h1 className="header-text">Choose Your Skip Size</h1>
        <p className="sub-header-text">
          Select the skip size that best suits your needs
        </p>
      </Flex>

      <Flex className="skip-select-cards-wrap">
        {skipSelectData.map((item, idx) => (
          <SkipSelectCard
            SkipSelectCardData={item}
            key={idx}
            isCardSelected={isCardSelected}
            setIsCardSelected={setIsCardSelected}
          />
        ))}
      </Flex>
    </Flex>
  );
};
export default SkipSelectScreen;
