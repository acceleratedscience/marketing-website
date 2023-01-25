import styles from "./Cards.module.scss";
import { Grid } from "components/Grid";
import { ReactNode, ElementType, Children } from "react";
import { ArrowRight } from "@carbon/icons-react";

const Cards = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <Grid className={styles.wrapper}>
      <p className={styles.heading}>Run more experiments and get faster results with fewer lines of code.</p>
      <div className={styles.grid}>{children}</div>
    </Grid>
  );
};

export const CardsCard = ({
  children,
  href,
  icon: Icon,
}: {
  icon: ElementType;
  children: ReactNode;
  href?: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {<Icon className={styles.icon} />}
      </div>
      {children}
      {/* <ArrowRight height="20" width="20" className={styles.icon} /> */}
    </div>
  );
};
export default Cards;
