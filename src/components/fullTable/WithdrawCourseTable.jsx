import React from 'react'
import { useGlobalFilter, useTable} from 'react-table'
import'./fullTable.css'
import GlobalFilter from '../tableFilter/GlobalFilter'

const WithdrawCoursesTable = ({ columns, data, tableHooks }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state
  } = useTable({ columns, data },
    useGlobalFilter,
    tableHooks
  )

  return (
    <>
      <GlobalFilter 
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <table className="table" {...getTableProps()}>
        <thead className="tableHead">
          {headerGroups.map(headerGroup => (
            <tr className="tableHeaderRow" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="tableHeader" {...column.getHeaderProps({
                  className: column.className
                })}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="tableBody" {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr className="tableDataRow" {...row.getRowProps()}>
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
    </>
  )
}

export default WithdrawCoursesTable
