import styles from "./Footer.module.scss";
import { Grid } from "components/Grid";
import { ReactNode } from "react";
import Link from "next/link";

export const FooterListLink = ({
  children,
  href,
  title,
}: {
  children: ReactNode;
  href: string;
  title: string;
}) => {
  return (
    <li className={styles.listItem}>
      <Link href={href}><a href={href} title={title}>{children}</a></Link>
    </li>
  );
};

export const Footer = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
      <div>
        <div className={styles.wrapper}>
          <Grid>
            <div className={styles.left}><span className={styles.heading}><Link href="/"><a href="/" title={heading}>{heading}</a></Link></span></div>
            <div className={styles.right}><ul className={styles.list}>{children}</ul></div>
          </Grid>
        </div>
      </div>
  );
};

export default Footer;
