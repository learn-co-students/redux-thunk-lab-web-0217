import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList.js'
import { fetchCats } from './actions/catActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class App extends Component {
  componentDidMount() {
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

function mapStateToProps(state) {
  return {
    cats: state.cats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
