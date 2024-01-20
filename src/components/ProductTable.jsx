import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";








export default function ProductTable() {
  const {products}=useSelector((state)=>state.stock)
  const {deleteStock,getStocks}=useStockCalls()

  console.log(products)



  const getRowId = (row) => row._id;
  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 1.4,
      minWidth: "150px",
      headerAlign: "center",
      sortable: false,
      align: "center",

    },
    //|headerAlign: "center" ile başlıkları orta hale getirdik
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1,
      headerAlign: "center",
      align: "center",

      valueGetter: (params) =>{
        return params.row?.categoryId?.name
      }
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.2,
      headerAlign: "center",
      align: "center",

      valueGetter: (params) =>{
        return params.row?.brandId?.name
      }
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      headerAlign: "center",
      align: "center",

    },
    {
      field: "quantity",
      headerName: "Stock",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerAlign: "center",
      getActions: (params) => [
        <GridActionsCellItem icon={<DeleteForeverIcon />} 
        onClick={()=>deleteStock("products",params.id)}
        label="Delete"  />
        
      ]
    },
    
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        getRowId={getRowId}
        autoHeight
        slots={{ toolbar: GridToolbar }}
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 10, 20,50,100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
