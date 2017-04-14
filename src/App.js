import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'
import { bindActionCreators } from 'redux'

import CatList from './CatList'
import { fetchCats } from './actions/catActions'

export class App extends Component {

  componentDidMount(){

    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics}/>

              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cats: state.cats
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}

export const WrapperApp = connect(mapDispatchToProps, mapStateToProps)(App)
