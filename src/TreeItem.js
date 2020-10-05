import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  makeStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%"
  },
  list: {
    width: "100%",
    listStyleType: "none",
    margin: 0
  }
}));

const TreeItem = ({ item }) => {
  const classes = useStyles();

  const [state, setState] = useState(false);

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <li className={classes.root} key={item.id}>
      <Accordion style={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          aria-label="Expand"
        >
          <FormControlLabel
            aria-label="Checkbox"
            onClick={handleClick}
            onFocus={handleClick}
            label={item.name}
            control={
              <Checkbox
                color="primary"
                checked={state}
                onChange={handleChange}
                name={item.id}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <ul className={classes.list}>
            {item.children &&
              Object.values(item.children).map((child) => (
                <TreeItem item={child} />
              ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </li>
  );
};

export default TreeItem;
