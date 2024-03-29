import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit"
import { iconStyle } from "../styles/globalStyles"
import useStockCalls from "../service/useStockCalls";


export default function PurchaseTable({handleOpen, setInfo}) {
  
  const {purchases}=useSelector((state)=>state.stock)
  const {deleteStock,putStock}=useStockCalls()

  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({row})=> new Date(row.createdAt).toLocaleString("tr-TR")

    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1,
      minWidth:100,
      headerAlign: "center",
      align: "center",
      renderCell:({row})=>row?.firmId?.name
     
    },
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
      flex: 1,
      minWidth:50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth:50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
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
      flex: 1,
      renderCell:({row: {firmId,brandId, price, quantity, productId, _id}})=>{
        return [
          <GridActionsCellItem
          key="edit"
          icon={<EditIcon/>}
          label="Edit"
          onClick={()=>{
              handleOpen()
              setInfo({ firmId, brandId, price, quantity, productId, _id })
          }}
          sx={iconStyle}
        />,
        <GridActionsCellItem 
          key="delete"
          icon={<DeleteForeverIcon/>}
          label="Delete"
          onClick={()=>{
            deleteStock("purchases", _id)
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
        rows={purchases}
        columns={columns}
        pageSizeOptions={[5, 10, 20,50,100]} //? sayfa başına satır sayısı
      
        disableRowSelectionOnClick
      />
    </Box>
  );
}
