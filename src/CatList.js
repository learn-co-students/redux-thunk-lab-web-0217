import React from 'react'

export default function CatList(props) {
  return (
    <div className='CatList'>
      {props.catPics.map(cat => <img src={cat.url}/>)}
    </div>
  )
}
