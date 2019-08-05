
import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import Logo from './img/Logo.svg'


  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }
  handleFilterTextChange=(filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
      <header>
                <div className="container">
                    <div className="headertop">
                        <div className="logo">
                                <img src={Logo} alt=""/>
                        </div>
                        <Search filterText={this.state.filterText}  onFilterTextChange={this.handleFilterTextChange}/>
                    </div>
                </div>
            </header>
      <Nav/>
      <Content filterText={this.state.filterText}/>
      <Footer/>
    </div>
    );
  }
}

export default App;



