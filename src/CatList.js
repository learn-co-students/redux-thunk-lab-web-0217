import React from 'react'

export default function CatList(props) {
  let catPics = props.catPics.map((cp) => <img src={cp.url}></img>)
  return (
    <div className="CatList">
    {catPics}
    </div>
  )
}
