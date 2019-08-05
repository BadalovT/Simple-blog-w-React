import React, { Component } from 'react';
import './Nav.css'
import Modal from 'react-modal';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
          };
    }
    openModal=()=> {
        this.setState({modalIsOpen: true});
      }

      afterOpenModal=()=> {
        // references are now sync'd and can be accessed.
      }

      closeModal=()=> {
        this.setState({modalIsOpen: false});
      }
      componentDidMount=()=> {
        Modal.setAppElement('body');
     }
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="navigation">
                        <ul>
                            <li>Whats new</li>
                            <li>Latest Trending</li>
                            <li>Popolar Trending</li>
                            <li>Most Recent</li>
                        </ul>
                        <div className="artboardbtn">
                            <button onClick={this.openModal}>+</button>
                        </div>
                    </div>
                   
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    >
                    <div className="modalhead">
                        <p>Ramkumar</p>
                        <div className="artboardbtn">
                            <button onClick={this.closeModal}>-</button>
                        </div>
                    </div>
                    <div className="modalfooter">
                        <button className="closemodal" onClick={this.closeModal}>close</button>
                        <button className="postmodal">post</button>
                    </div>
                    

                    </Modal>
            </nav>
        );
    }
}

export default Nav;