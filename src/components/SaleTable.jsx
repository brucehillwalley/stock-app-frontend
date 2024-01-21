import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit"
import { iconStyle } from "../styles/globalStyles"
import useStockCalls from "../service/useStockCalls";








export default function SaleTable({handleOpen, setInfo}) {
  const {sales}=useSelector((state)=>state.stock)
  const {deleteStock,putStock}=useStockCalls()

  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1.5,
      minWidth: "150px",
      headerAlign: "center",
      align: "center",
      renderCell: ({row})=> new Date(row.createdAt).toLocaleString("tr-TR")

    },
    //|headerAlign: "center" ile başlıkları orta hale getirdik
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      minWidth:100,
      headerAlign: "center",
      align: "center",
      renderCell:({row})=>row?.brandId?.name
     
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1,
      minWidth:100,
      headerAlign: "center",
      align: "center",
      renderCell:({row})=>row?.productId?.name,
      // valueGetter: (params) =>{
      //   return params.row?.productId?.name
      // }
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth:50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth:50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth:50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerAlign: "center",
      minWidth:40,
      renderCell:({row: {brandId, price, quantity, productId, _id}})=>{
        return [
          <GridActionsCellItem
          key="edit"
          icon={<EditIcon/>}
          label="Edit"
          onClick={()=>{
              handleOpen()
              setInfo({ brandId, price, quantity, productId, _id })
          }}
          sx={iconStyle}
        />,
        <GridActionsCellItem 
          key="delete"
          icon={<DeleteForeverIcon/>}
          label="Delete"
          onClick={()=>{
            deleteStock("sales", _id)
          }}
          sx={iconStyle}
        />
        ]
      }
    },
    
  ];
  return (
    <Box sx={{ width: "100%", mt:4 }}>
      <DataGrid
        getRowId={getRowId}
        autoHeight
        slots={{ toolbar: GridToolbar }}
        rows={sales}
        columns={columns}
        pageSizeOptions={[5, 10, 20,50,100]} //? sayfa başına satır sayısı
      
        disableRowSelectionOnClick
      />
    </Box>
  );
}
