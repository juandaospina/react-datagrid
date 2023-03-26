import { DataGrid, GridRowId, GridSelectionModel } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useState } from "react";
import { people } from "../../data/people";

import { IPerson } from "../../models/people";

export const Home = () => {
  const [seletedPeople, setSeletedPeople] = useState<IPerson[] | undefined>();  
  const pageSize = 5;
  const colums = [
    {
      field: "actions",
      headerName: "",
    },
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "category",
      headerName: "Categoria",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "company",
      headerName: "Empresa",
      flex: 1,
      minWidth: 150,
    },
  ];

  const onRowsSelectionHandler = (ids: GridSelectionModel) => {
    // if(!ids) return
    const selectedRowsData = ids.map((id: GridRowId) => people.find((row) => row.id === id));
    // setSeletedPeople(selectedRowsData);
    console.log("[ROWS_SELETED]", selectedRowsData);
  };

  return (
    <Box sx={{ minWidth: "10px", height: 400, marginTop: "90px" }}>
      <DataGrid
        rows={people}
        columns={colums}
        disableColumnSelector
        disableSelectionOnClick
        checkboxSelection
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        onSelectionModelChange={onRowsSelectionHandler}
      />
    </Box>
  );
};
