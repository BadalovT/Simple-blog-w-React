import React, { Component } from 'react';
import axios from 'axios';
import './Postinside.css'
import {Link } from "react-router-dom";

class Postinside extends Component {
    constructor(props) {
        super(props);
        this.state={
            post: null
          }
    }
    componentDidMount(){
        axios.get(`http://www.mocky.io/v2/5d4197853100007bc2539500`)
          .then(res => {
            const posts = res.data.data.posts;
            const post = posts.filter((post)=>{
              if(post.id == this.props.match.params.id){
                return post;
              }
            })
            this.setState({ post: post });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
      }


    render() {
        const post = this.state.post;
        if(post !== null && post !== undefined){
        const currentPost= post[0];
        const contsubs= currentPost.content;
        const content= {__html: contsubs};
        const catsubs=currentPost.category.substring(0, 3)
        return (
            <div className="container">
               <div  className={catsubs+" postinside"}>
                          <div className="category">
                                  <p>
                                     {currentPost.category}
                                  </p>
                              </div>
                          <div className="header">
                              <p>{post.title}</p>
                              </div>
                          <div className="image">
                                  <img src={currentPost.image.full} alt="Best practice"/>
                              </div>
                          <div className="postcontent">
                              <div className="text">
                                  <p dangerouslySetInnerHTML={content}>
                                    
                                  </p>
                              </div>
                              <div className="dateandauthor">
                                  <p>on {post.created_at} / {currentPost.author}</p>
                              </div>
                          </div>
                      </div>
                      <div className="homepagebtn">
                           <Link to="/">
                               <button>Home page</button>
                          </Link>
                      </div>
            </div>
        );
        }
        else{
          return <div></div>
        }
    }
}

export default Postinside;