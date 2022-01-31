import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PictureIcon from "@material-ui/icons/PictureInPictureAltOutlined";

const useStyles = makeStyles((theme) => ({
  formField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    gap: "5rem",
    padding: "15px",
  },
  getImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    padding: "15px",
  },
}));
function Forms() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.formField}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Top Text"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Bottom Text"
          variant="outlined"
        />
      </div>
      <div className={classes.getImage}>
        <Button variant="contained" endIcon={<PictureIcon />}>
          Get a new Meme Image
        </Button>
      </div>
    </div>
  );
}

export default Forms;
