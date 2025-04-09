import React, { useEffect, useState } from "react";
import { Flex, Grid } from "../../../Components/Box/box.styles";
import axios from "axios";
import { Loader } from "../../../Components/Loader/loader";
import SkipSelectCard from "../../../Components/SkipSelectCard/skipSelectCard";
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
  if (isLoading) <Loader />;
  return (
    <Flex>
      <Flex className="disposal-flow-header">
        <h1 className="header-text">Choose Your Skip Size</h1>
        <p className="sub-header-text">
          Select the skip size that best suits your needs
        </p>
      </Flex>

      {skipSelectData?.length === 0 ? (
        <Flex className="skip-select-cards-wrap">No Data</Flex>
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
    </Flex>
  );
};
export default SkipSelectScreen;
