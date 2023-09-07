import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({values,removeItem ,editItem}) => {
  return (<div className='grocery-list'>
    {
      values.map((value)=>{
        const {id,title} = value
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>

            <div className='btn-container'>
              <button className='edit-btn' type='button' onClick={()=>editItem(id)}>
                <FaEdit></FaEdit>
              </button>
              <button className='delete-btn' type='button' onClick={()=>removeItem(id)}>
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
