import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import './tableFilter.css'

const GlobalFilter = ({
  preGlobalFilteredRows,
  setGlobalFilter,
  globalFilter,
}) => {
  // State variables
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)

  // Functions
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 300)

  // Render
  return (
    <div className="globalFilterContainer">
      <label className="globalFilterLabel"></label>
      <input
        className="globalFilterInput"
        value={value || ""} 
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`Search ${count} records...`}
      />
    </div>
  )
}

export default GlobalFilter