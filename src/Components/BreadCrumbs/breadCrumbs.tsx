import React from "react";
import { IconType } from "react-icons";
import { BreadCrumbsWrap } from "./breadCrumbs.styles";
import { Flex } from "../Box/box.styles";

interface BreadcrumbItem {
  label: string;
  icon?: IconType;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  activeIndex: number;
}

const BreadCrumbs = ({ breadcrumbs, activeIndex }: BreadcrumbsProps) => {
  return (
    <BreadCrumbsWrap>
      {breadcrumbs.map((item, idx) => {
        const Icon = item.icon as React.ComponentType<{ className?: string }>;

        return (
          <React.Fragment key={idx}>
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
              <p className="breadcrumb-label">{item.label}</p>
            </Flex>
            {idx < breadcrumbs.length - 1 && "/"}
          </React.Fragment>
        );
      })}
    </BreadCrumbsWrap>
  );
};

export default BreadCrumbs;
