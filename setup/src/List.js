import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({values}) => {
  return (<div className='grocery-list'>
    {
      values.map((value)=>{
        const {id,title} = value
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>

            <div className='btn-container'>
              <button className='edit-btn' type='button'>
                <FaEdit></FaEdit>
              </button>
              <button className='delete-btn' type='button'>
                <FaTrash></FaTrash>
              </button>
            </div>

          </article>
        )
      })
    }

  </div>)
}

export default List
