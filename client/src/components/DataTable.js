import React from 'react';
import MaterialTable from "material-table";

export default function DataTable(props) {
  const { tableConfig } = props;
  const onRowClick = (e, rowData) => {
    props.onRowClick(tableConfig.name, rowData)
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={tableConfig.columns}
        data={tableConfig.data}
        title={tableConfig.label}
        onRowClick={onRowClick}
      />
    </div>
  );
}
