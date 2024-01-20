import { Button, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";
import TableSkeleton, { CardSkeleton, ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";

const Firms = () => {
  const initialState = {
    name: "",
    phone: "",
    address: "",
    image: "",
  };
  const [info, setInfo] = useState({ initialState });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInfo(initialState)
    setOpen(false)};
  // const { getFirms, getSales } = useStockCalls();
  const { getStocks } = useStockCalls();
  const { firms, error, loading} = useSelector((state) => state.stock);
  useEffect(() => {
    // getFirms();
    // getSales();
    getStocks("firms");
  }, []);
  console.log(firms);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>
      

      <FirmModal open={open} handleClose={handleClose} info={info}
      setInfo={setInfo} 
      />
      
      {error && <ErrorMsg/>}

      {!error && !loading && !firms.length && <NoDataMsg/>}

      {/* {loading && [1,2,3,4].map((item)=><CardSkeleton> <FirmCard/> </CardSkeleton>) } */}
      { loading && 
   (
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {[...new Array(6)].map((_, index) => ( 
          <Grid item key={index}>
            <Skeleton  animation="wave" width={300} height={400} />
          </Grid>
        ))}
      </Grid>
    )
  }

     {!loading && !error && firms.length > 0 && (<Grid container gap={2} mt={3} justifyContent={"center"}>
     {firms?.map((firm)=>(

      <Grid item key={firm._id}>
        <FirmCard firm={firm} info={info} setInfo={setInfo} handleOpen={handleOpen}/>
      
      </Grid>

     ))}
      </Grid>)}

      
    </div>
  );
};

export default Firms;
