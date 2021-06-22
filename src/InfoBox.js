import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox(props) {
  return (
    <Card className="infoBox" >
      <CardContent>
        {/* titlr */}
        <Typography className="infoBox__title" color="textSecondary">
          {props.title}
        </Typography>
        {/* number of case tday */}
        <h2 className="infoBox__cases">{props.cases}</h2>
        {/* total number of cases */}
        <Typography className="infoBox__total" color="textSecondary">
          Total: {props.total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
