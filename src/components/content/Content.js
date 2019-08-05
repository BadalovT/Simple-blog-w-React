import React, { Component } from 'react';
import Posts from '../posts/Posts';
import axios from 'axios';
import './Content.css'
import Postinside from '../postinside/Postinside';
import { BrowserRouter as Router, Route,} from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[],
        }
    }
    // function for fetching data
    componentDidMount() {
        axios.get(`http://www.mocky.io/v2/5d4197853100007bc2539500`)
          .then(res => {
            // set data to state from response
            const posts = res.data.data.posts;
            this.setState({ posts });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
      }

    render( ) {
        return (
            <section className="content">
                {/* show components which selected at link */}
                <Router>
                    <Route exact path="/" component={(props) =>  <Posts posts={this.state.posts} filterText={this.props.filterText}/>} />
                    <Route exact path='/posts/:id'  component={Postinside}/>
                </Router>
            </section>
        );
    }
}

export default Content;