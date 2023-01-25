import styles from "./LearnMore.module.scss";
import { Grid } from "components/Grid";
import { ReactNode } from "react";
import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";

const LearnMore = ({ children }: { children: ReactNode }) => {
  return (
    /* <Grid className={styles.wrapper}>*/
      /*{ <p className={styles.heading}>Case Studies</p> }*/
      <div className={styles.grid}>{children}</div>
    /* </Grid>*/
  );
};

export const LearnMoreCard = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a className={styles.card} href="{href}" >
        {children}
        <ArrowRight height="20" width="20" className={styles.icon} />
      </a>
    </Link>
  );
};
export default LearnMore;
