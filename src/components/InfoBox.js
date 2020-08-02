import React from 'react'
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core"
import './css/InfoBox.css'

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      onClick = {props.onClick} 
      className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>

    <CardMedia
        // className={classes.media}
        image="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
        title="Surprised monkey"
      />

      <CardContent> 
        <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
