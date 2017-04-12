import React, {Component} from 'react'

class CatList extends Component {
	render() {
		const catList = this.props.catPics.map(cat => {
			return <img src={cat.url}></img>
		})
		return (
			<div>
				{catList}
			</div>
		)
	}
}

export default CatList