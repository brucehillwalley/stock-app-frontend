import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";

const Products = () => {
  const { getStocks } = useStockCalls();
  const { products, error, loading } = useSelector((state) => state.stock);
  const initialState = {
   
"categoryId": "",
"brandId": "",
"name": ""
  };
  const [info, setInfo] = useState({ initialState });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setInfo(initialState);
    setOpen(false);
  };

 

  useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
  }, []);

  console.log(products);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error && <ErrorMsg/>}

      {!error && !loading && !products.length && <NoDataMsg/>}

      {loading && <TableSkeleton/>}

     {!loading && !error && products.length > 0 && <ProductTable/>}
    </div>
  );
};

export default Products;
