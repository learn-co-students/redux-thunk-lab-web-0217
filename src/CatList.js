import React, {Component} from 'react'

export default class CatList extends Component {
  render() {
    const catList = this.props.catPics.map((cat) => {
      return <img src={cat.url} />
    })

    return (
      <div>
        {catList}
      </div>
    )
  }
}
