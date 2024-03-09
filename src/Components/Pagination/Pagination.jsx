import React from 'react'

const Pagination = ({currentPage, TotalPage=10, onPageChange}) => {

  const getPageNumber=()=>{
    let pages = [];
    for(let i = 1; i<=TotalPage; i++){
      pages.push(i);
    }
    return pages;
  }


  return (
    <div className='pagination'>
      <button className='page-btn' 
      onClick={()=>onPageChange(currentPage - 1)}
      disabled={currentPage===1}
      >Prev</button>
      {
        getPageNumber().map(pageNo=> 
        <button className='page-btn'
          key={pageNo}
          onClick={()=>onPageChange(pageNo)}>
          {pageNo}</button>)
      }
      <button className='page-btn' 
      onClick={()=>onPageChange(currentPage+1)}
      disabled={currentPage===TotalPage}
      >Next</button>
    </div>
  )
}

export default Pagination