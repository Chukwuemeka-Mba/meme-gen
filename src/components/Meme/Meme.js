import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  box: {
    borderColor: "red",
    borderWidth: "5px",
  },
}));
function Meme() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      James
      <Box
        sx={{
          width: 300,
          height: 300,
          borderColor: "secondary.dark",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </div>
  );
}

export default Meme;
