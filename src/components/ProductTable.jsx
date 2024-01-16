import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "_id", headerName: "#", flex:0.6, headerAlign: "center"},
  {
    field: "category",
    headerName: "Category",
    flex:1,
    editable: true,
    headerAlign: "center"
  },
  {
    field: "brand",
    headerName: "Brand",
    flex:1.2,
    editable: true,
    headerAlign: "center"
  },
  {
    field: "name",
    headerName: "Name",
    type: "number",
    flex:1.5,
    editable: true,headerAlign: "center"
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex:1.5,
    headerAlign: "center",
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "number",
    flex:1.5,
    headerAlign: "center",
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ProductTable() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
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
