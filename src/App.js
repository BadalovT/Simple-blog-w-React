
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

  // function setstate for search
  handleFilterTextChange=(filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
            {/* header start */}
             <header>
                <div className="container">
                    <div className="headertop">
                        {/* logo */}
                        <div className="logo">
                                <img src={Logo} alt=""/>
                        </div>
                        {/* show component Search */}
                        <Search filterText={this.state.filterText}  onFilterTextChange={this.handleFilterTextChange}/>
                    </div>
                </div>
            </header>
            {/* header end */}

      {/* navigation start */}
      <Nav/>
      {/* navigation end */}

      {/* content for posts and inside post */}
      <Content filterText={this.state.filterText}/>
      {/* Footer */}
      <Footer/>
    </div>
    );
  }
}

export default App;



