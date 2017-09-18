import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions.js'

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


export const WrapperApp = connect(mapDispatchToProps, mapStateToProps)(App)
