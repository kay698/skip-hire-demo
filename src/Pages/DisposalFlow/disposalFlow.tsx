import React, { ReactElement, SVGProps, useState } from "react";
import { Flex } from "../../Components/Box/box.styles";
import { DisposalFlowWrap } from "./disposalFlow.styles";
import BreadCrumbs from "../../Components/BreadCrumbs/breadCrumbs";
import { FaLocationDot } from "react-icons/fa6";

const DisposalFlow = () => {
  const [activeIndex] = useState(2);

  const breadCrumbsList = [
    { label: "Postcode", icon: <FaLocationDot /> },
    { label: "Waste Type", icon: <FaLocationDot /> },
    { label: "Select Type", icon: <FaLocationDot /> },
    { label: "Permit Check", icon: <FaLocationDot /> },
    { label: "Choose Date", icon: <FaLocationDot /> },
    { label: "Payment", icon: <FaLocationDot /> },
  ];

  return (
    <DisposalFlowWrap>
      <BreadCrumbs breadcrumbs={breadCrumbsList} activeIndex={activeIndex} />
    </DisposalFlowWrap>
  );
};
export default DisposalFlow;
