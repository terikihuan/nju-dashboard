import React, { useMemo } from 'react'

const SelectColumnFilter = ({column: { filterValue, setFilter, preFilteredRows, id }}) => {
  // Calculate filter options
  const options = useMemo(() => {
    const newOptions = new Set()
    preFilteredRows.forEach(row => {
      newOptions.add(row.values[id])
    })
    return [...newOptions.values()]
  }, [id, preFilteredRows])

  // Render
  return (
    <select
      value={filterValue}
      onChange={(e) => setFilter(e.target.value || undefined)}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option} >{option}</option>
      ))}
    </select>
  )
}

export default SelectColumnFilter
