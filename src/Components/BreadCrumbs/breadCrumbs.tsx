import React, { ReactElement, SVGProps } from "react";

interface BreadcrumbItem {
  label: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  id: number;
}

interface BreadcrumbsProps {
  breadcrumbs?: BreadcrumbItem[];
  activeIndex?: number;
}

const ProgressBar: React.FC<BreadcrumbsProps> = ({
  breadcrumbs,
  activeIndex,
}) => {
  return <div>hi</div>;
};
export default ProgressBar;
