import { Button,Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import SaleModal from "../components/SaleModal";
import SaleTable from "../components/SaleTable";

const Sales = () => {
  const { getStockPromise } = useStockCalls();
  const { sales, error, loading } = useSelector((state) => state.stock);

  const initialState = {
brandId: "",
productId: "",
quantity: "",
price:""
  };

  const [info, setInfo] = useState({ initialState });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setInfo(initialState);
    setOpen(false);
  };

 

  useEffect(() => {
    // getStocks("sales");
    // getStocks("products");
    // getStocks("brands");
    getStockPromise(["sales","products","brands"])
  }, []);

 
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
       Sales
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New Sale
      </Button>

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error && <ErrorMsg/>}

      {loading && <TableSkeleton/>}

      {!error && !loading && !sales.length && <NoDataMsg/>}

     {!loading && !error && sales.length > 0 && <SaleTable setInfo={setInfo} handleOpen={handleOpen}  />}
    </div>
  );
};

export default Sales;
