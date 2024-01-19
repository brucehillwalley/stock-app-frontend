import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";



const columns = [
  {
    field: "_id",
    headerName: "#",
    flex: 1.4,
    headerAlign: "center",
    sortable: false,
  },
  //|headerAlign: "center" ile başlıkları orta hale getirdik
  {
    field: "categoryId",
    headerName: "Category",
    flex: 1,
    headerAlign: "center",
    valueGetter: (params) =>{
      return params.row?.categoryId?.name
    }
  },
  {
    field: "brandId",
    headerName: "Brand",
    flex: 1.2,
    headerAlign: "center",
    valueGetter: (params) =>{
      return params.row?.brandId?.name
    }
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1.5,
    headerAlign: "center",
  },
  {
    field: "quantity",
    headerName: "Stock",
    flex: 1.5,
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1.5,
    headerAlign: "center",
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];


export default function ProductTable() {
  const {products}=useSelector((state)=>state.stock)



  const getRowId = (row) => row._id;

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        getRowId={getRowId}
        autoHeight
        rows={products}

        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
