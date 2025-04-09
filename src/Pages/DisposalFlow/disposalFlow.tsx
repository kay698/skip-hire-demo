import React, { useState } from "react";
import { DisposalFlowWrap } from "./disposalFlow.styles";
import BreadCrumbs from "../../Components/BreadCrumbs/breadCrumbs";
import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin6Fill, RiTruckFill } from "react-icons/ri";
import { MdShield } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa6";

const DisposalFlow = () => {
  const [activeIndex] = useState(2);

  const breadCrumbsList = [
    { label: "Postcode", icon: FaLocationDot },
    { label: "Waste Type", icon: RiDeleteBin6Fill },
    { label: "Select Type", icon: RiTruckFill },
    { label: "Permit Check", icon: MdShield },
    { label: "Choose Date", icon: FaCalendar },
    { label: "Payment", icon: BsFillCreditCardFill },
  ];

  return (
    <DisposalFlowWrap>
      <BreadCrumbs breadcrumbs={breadCrumbsList} activeIndex={activeIndex} />
    </DisposalFlowWrap>
  );
};

export default DisposalFlow;
