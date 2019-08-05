import React, { Component } from 'react';
import Search from '../search/Search';
import './Header.css'
import Logo from './img/Logo.svg'


class Header extends Component {

    render() {
        return (
            <header>
                <div className="container">
                    <div className="headertop">
                        <div className="logo">
                                <img src={Logo} alt=""/>
                        </div>
                        <Search filterText={this.props.filterText}  onFilterTextChange={this.props.handleFilterTextChange}/>
                {console.log(this.props.filterText)}

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;