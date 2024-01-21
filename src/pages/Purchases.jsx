import { Button,Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import PurchaseModal from "../components/PurchaseModal";
import PurchaseTable from "../components/PurchaseTable";

const Purchases = () => {
  const { getStocks } = useStockCalls();
  const { purchases, error, loading } = useSelector((state) => state.stock);

  const initialState = {
firmId:"",
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
    getStocks("purchases");
    getStocks("products");
    getStocks("brands");
    getStocks("firms");
  }, []);

 
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
       Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New Purchase
      </Button>

      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error && <ErrorMsg/>}

      {loading && <TableSkeleton/>}

      {!error && !loading && !purchases.length && <NoDataMsg/>}

     {!loading && !error && purchases.length > 0 && <PurchaseTable setInfo={setInfo} handleOpen={handleOpen}  />}
    </div>
  );
};

export default Purchases;
