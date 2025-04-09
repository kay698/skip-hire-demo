import React, { ReactElement, SVGProps } from "react";
import { Flex } from "../Box/box.styles";
import { BreadCrumbsWrap } from "./breadCrumbs.styles";

interface BreadcrumbItem {
  label: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  activeIndex?: number;
}

const BreadCrumbs: React.FC<BreadcrumbsProps> = ({
  breadcrumbs,
  activeIndex,
}) => {
  return (
    <BreadCrumbsWrap>
      {breadcrumbs.map((item, idx) => (
        <p
          key={idx}
          className={`breadcrumbs__item  ${
            activeIndex === idx && "breadcrumbs__item__active"
          }`}
        >
          {item.icon} {item.label}
        </p>
      ))}
    </BreadCrumbsWrap>
  );
};
export default BreadCrumbs;
