import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";


const Brands = () => {
  const initialState = {
    name: "",
    image: "",
  };
  const [info, setInfo] = useState({ initialState });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInfo(initialState)
    setOpen(false)};
  const { getStocks } = useStockCalls();
  const { brands } = useSelector((state) => state.stock);
  useEffect(() => {
    // getFirms();
    // getSales();
    getStocks("brands");
  }, []);
  
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
       Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Brand</Button>
      <BrandModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>

      <Grid container gap={2} mt={3} justifyContent={"center"}>
     {brands?.map((brand)=>(

      <Grid item key={brand._id}>
        <BrandCard brand={brand} handleOpen={handleOpen} info={info} setInfo={setInfo}/>
      
      </Grid>

     ))}
      </Grid>
    </div>
  );
}

export default Brands
