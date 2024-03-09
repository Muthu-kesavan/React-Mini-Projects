import React, { useState } from 'react'
import Pagination from './Pagination'
const Test = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange=(currentPage)=>{
    setCurrentPage(currentPage);
  }

  const dummy = Array.from({length:100}, (_, index)=>({
    id: index+1,
    name: `Product ${index+1}`
  }))

  const indexLast = currentPage * itemsPerPage;
  const indexFirst =indexLast - itemsPerPage;
  const currentList = dummy.slice(indexFirst, indexLast);

  return(
    <div>
      <h1>Pagination</h1>
      <ul>
        {
        currentList.map(listItems=> 
        <li key={listItems.id}>
         {listItems.name}
        </li>)
        }
      </ul>
      <Pagination 
      currentPage={currentPage}
      TotalPage={10}
      onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Test