import React from 'react'
import {useFilters, useTable} from 'react-table'
import'./fullTable.css'

const SelectCourseTable = ({ columns, data, defaultColumn, tableHooks }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, defaultColumn },
    useFilters,
    tableHooks
  )

  return (
    <table className="table" {...getTableProps()}>
      <thead className="tableHead">
        {headerGroups.map(headerGroup => (
          <tr className="tableHeaderRow" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className="tableHeader" {...column.getHeaderProps({
                className: column.className
              })}>
                {column.render('Header')}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="tableBody" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr className="tableDataRow" {...row.getRowProps()}  >
              {row.cells.map(cell => {
                return (
                  <td className="tableData" {...cell.getCellProps({
                  })}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SelectCourseTable
