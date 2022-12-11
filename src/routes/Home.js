import React from "react";
import styles from "@/styles/Home.css";
import useStyles from "isomorphic-style-loader-react18/useStyles";

export default function Home() {
  useStyles(styles);
  return <div className={styles.home}>Home</div>;
}
