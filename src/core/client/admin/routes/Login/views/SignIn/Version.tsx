import React, { FunctionComponent } from "react";

import { Flex, Typography } from "coral-ui/components";

import styles from "./Version.css";

const Version: FunctionComponent = () => {
  return (
    <Flex justifyContent="center">
      <Typography className={styles.version} variant="detail" align="center">
        {process.env.TALK_VERSION ? `v${process.env.TALK_VERSION}` : "Unknown"}
      </Typography>
    </Flex>
  );
};

export default Version;
