import React, { useState } from 'react';
import { useTable, useColumnVisibility } from 'react-table';

const AdvancedDataTable = ({ columns, data }) => {
  const [visibleColumns, setVisibleColumns] = useState(columns.map((column) => column.id));
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, toggleColumn } = useTable({
    columns,
    data,
  });

  const { allColumns, toggleHiddenColumns } = useColumnVisibility(columns);

  const toggleColumnVisibility = (columnId) => {
    toggleColumn(columnId);
    setVisibleColumns((prevVisibleColumns) =>
      prevVisibleColumns.includes(columnId)
        ? prevVisibleColumns.filter((col) => col !== columnId)
        : [...prevVisibleColumns, columnId]
    );
  };

  return (
    <div>
      {/* Column Visibility Toggle Buttons */}
      <div>
        <strong>Toggle Columns: </strong>
        {allColumns.map((column) => (
          <label key={column.id}>
            <input
              type="checkbox"
              checked={visibleColumns.includes(column.id)}
              onChange={() => toggleColumnVisibility(column.id)}
            />{' '}
            {column.Header}
          </label>
        ))}
      </div>

      {/* Table */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdvancedDataTable;