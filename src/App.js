import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import React from 'react';
import SelectedBeast  from "./components/selectedbeast";
import data from "./components/data.json";
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beastList:  {}
    };
  }
 
  showModal = (title) => {
    let beasts = data.find((beast) => {
      if (beast.title === title) {
        return beast;
      }
    });
    this.setState({
      beastList: beasts,
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      beastList: {},
      show: false,
    });
  };


  render() {
    return (
    <>
        <Header />
        <Main showModal={this.showModal} />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} beastList={this.state.beastList} />
        <Footer/>
    </>
    );
  }
}

export default App;
