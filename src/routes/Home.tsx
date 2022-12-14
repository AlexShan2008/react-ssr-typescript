import React from "react";
import styles from "@/styles/Home.css";
import withStyles from "isomorphic-style-loader-react18/withStyles";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home title</title>
        <meta name="description" content="I am a description"></meta>
      </Helmet>
      <div className={styles.home}>Home</div>
    </>
  );
}

export default withStyles(styles)(Home);
