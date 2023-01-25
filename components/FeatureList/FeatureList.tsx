import { ReactNode, ElementType, Children } from "react";

import styles from "./FeatureList.module.scss";
import { Grid } from "components/Grid";
import Image, { StaticImageData } from "next/future/image";
import screen from "media/screen.png";

export const FeatureListFeature = ({
  children,
  // heading,
  icon: Icon,
}: {
  icon: ElementType;
  children: ReactNode;
}) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.iconWrapper}>
        {<Icon className={styles.icon} />}
      </div>
      <div>
        {children}
      </div>
    </li>
  );
};

type FeatureListProps = {
  heading?: ReactNode;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  children: ReactNode;
};

export const FeatureList = ({
  heading,
  imageSrc,
  imageAlt,
  children,
}: FeatureListProps) => {
  return (
      <div>
        {/* <p className={styles.heading}>{heading}</p> */}
        <ul className={styles.list}>{children}</ul>
      </div>
  );
};

export default FeatureList;
