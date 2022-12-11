import React from "react";
import styles from "@/styles/Home.css";
import withStyles from "isomorphic-style-loader-react18/withStyles";

function Home() {
  return <div className={styles.home}>Home</div>;
}

export default withStyles(styles)(Home);
