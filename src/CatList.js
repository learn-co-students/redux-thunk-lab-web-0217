import React from 'react'

export default class CatList extends React.Component {
  render() {
    let catList = this.props.catPics.map((p) => {
      return <img src={p.url} />
    })

    return (
      <div>
        {catList}
      </div>
    )
  }
}
