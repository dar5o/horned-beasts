import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import React from 'react';
class App extends React.Component {
  render() {
    return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
    );
  }
}

export default App;
