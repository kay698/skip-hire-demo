import React from "react";
import { IconType } from "react-icons";
import { BreadCrumbsWrap } from "./breadCrumbs.styles";
import { Flex } from "../Box/box.styles";
import { RiArrowRightWideFill } from "react-icons/ri";

interface BreadcrumbItem {
  label: string;
  icon?: IconType;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  activeIndex: number;
}

const BreadCrumbs = ({ breadcrumbs, activeIndex }: BreadcrumbsProps) => {
  const ArrowIcon = RiArrowRightWideFill as React.ComponentType<{
    className?: string;
  }>;

  return (
    <BreadCrumbsWrap>
      {breadcrumbs.map((item, idx) => {
        const Icon = item.icon as React.ComponentType<{ className?: string }>;

        return (
          <>
            <Flex
              key={idx}
              className={`breadcrumb-item ${
                activeIndex > idx
                  ? "completed-crumb"
                  : activeIndex === idx
                  ? "active-crumb"
                  : ""
              }`}
              width="max-content"
              gap=".5rem"
            >
              {Icon && <Icon className="breadcrumb-icon" />}
              <span className="breadcrumb-label">{item.label}</span>
            </Flex>
            {idx < breadcrumbs.length - 1 && "/"}
          </>
        );
      })}
    </BreadCrumbsWrap>
  );
};

export default BreadCrumbs;
