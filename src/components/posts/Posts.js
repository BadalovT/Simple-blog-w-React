import React, { Component } from 'react';
import './Posts.css';
import Post from '../post/Post';
import { Link } from "react-router-dom";




class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible: 6,
        }
    }

    // function for load more button
    loadMore= () => {
        this.setState((prev) => {
          return {visible: prev.visible + 3};
        });
      }


    render() {
        const postdata =this.props.posts;
        const filterText = this.props.filterText;
        const filtertextlover=filterText.toLowerCase()
        const postarray=[]
        // loop data for show posts
        postdata.slice(0, this.state.visible).map((item)=>{
          const stritem=item.title;
          const titlelover=stritem.toLowerCase();
          // find index of for search
          if (titlelover.indexOf(filtertextlover) === -1) {
            return this;
          }
          // add to new array mapped elements from response
          return postarray.push(
            <div key={item.id} className="col-md-4 mb-5">
                    {/* link for open inside post */}
                    <Link key={item.id} to={`/posts/${item.id} `}>
                      {/* show posts  */}
                        <Post key={item.id} postdata={item}/> 
                    </Link>
            </div>
          );
        })
        return (
            <>
            <div className="posts">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="goverment">
                      <p>goverment & policy</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* show array which has mapped data from response and finded index of  */}
                  {postarray}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="load-more">
                      {/* load more button */}
                       {this.state.visible < postdata.length &&<button onClick={this.loadMore} type="button" className="load-more">Load more</button>}
                    </div>
                  </div>
                </div>
              </div>   
            </div>
            <div>
            </div>
            </>
        );
    }
}

export default Posts;