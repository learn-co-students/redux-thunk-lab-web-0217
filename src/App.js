import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

export class App extends Component {   
  
  componentDidMount() {
    if (this.props.catPics.length == 0)
      this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {catPics: state.pictures}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCats: () => {
      dispatch(fetchCats())
    }
  }
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

