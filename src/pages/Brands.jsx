import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import BrandCard from "../components/BrandCard";


const Brands = () => {
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
      <Button variant="contained">New Brand</Button>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
     {brands?.map((brand)=>(

      <Grid item key={brand._id}>
        <BrandCard brand={brand}/>
      
      </Grid>

     ))}
      </Grid>
    </div>
  );
}

export default Brands
