import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { iconStyle } from "../styles/globalStyles";
import useStockCalls from "../service/useStockCalls";



export default function FirmCard({ firm, info, setInfo,handleOpen }) {
  const { address, name, image, phone, _id } = firm;

  const { deleteStock } = useStockCalls();
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardMedia component="img" alt={name} height="140" image={image} sx={{objectFit:"contain"}} />
      <Typography variant="body2" color="text.secondary">
        {phone}
      </Typography>

      <CardActions>
        <DeleteOutlineIcon sx={iconStyle} onClick={() => deleteStock("firms",_id)} />
        <EditIcon sx={iconStyle} onClick={
          (e)=>{ 
            handleOpen()
            setInfo(firm)}} />
      </CardActions>
    </Card>
  );
}
