import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Auth from './components/auth';
import Layout from './components/layout';
import Modal from './lib/modal/components/modal';
import ModalContent from './components/modal-content';

class App extends Component {
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }
    return (
      <div className="App" style={style}>
        <Auth />
        <Layout />
        <Modal>
          <ModalContent />
        </Modal>
      </div>
    );
  }
}

App = connect()(App);

export default App;