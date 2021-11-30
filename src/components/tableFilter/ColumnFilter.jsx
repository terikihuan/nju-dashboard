import React, {useState} from 'react'
import styled from 'styled-components'
import { useAsyncDebounce } from "react-table";

// Components
const ColumnSearchContainer = styled.div`
`

const ColumnSearchInput = styled.input`
`

const ColumnFilter = ({column: { filterValue, preFilteredRows, setFilter },}) => {
  // State variables
  const count = preFilteredRows.length
  const [value, setValue] = useState(filterValue)

  // Functions
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 300)

  // Render
  return (
    <ColumnSearchContainer>
      <ColumnSearchInput 
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`Search...`}
      />
    </ColumnSearchContainer>
  )
}

export default ColumnFilter
