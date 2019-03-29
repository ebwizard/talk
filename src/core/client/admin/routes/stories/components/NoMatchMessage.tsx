import { Localized } from "fluent-react/compat";
import React, { StatelessComponent } from "react";

import { Typography } from "talk-ui/components";

import styles from "./NoMatchMessage.css";

const NoMatchMessage: StatelessComponent = props => (
  <Localized id="stories-noMatchMessage">
    <Typography className={styles.root} variant="bodyCopyBold" align="center">
      We could not find any stories matching your criteria.
    </Typography>
  </Localized>
);

export default NoMatchMessage;