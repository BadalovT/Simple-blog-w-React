import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    render() {
        const {postdata} = this.props;
        const contsubs = postdata.content.substring(0, 100);
        const content= {__html: contsubs};
        const catsubs=postdata.category.substring(0, 3)
        return (
                    // post start
                    <div className={catsubs+" post"} >
                        <div className="image top">
                            <img src={postdata.image.thumbnail} alt=""/>
                        </div>
                        <div className="bottom">
                            <div className="category">
                                <p>{postdata.category}</p>
                            </div>
                            <div className="dateauthor">
                                <span>on {postdata.created_at}/</span><span>{postdata.author} </span>
                            </div>  
                            <div className="title">
                                <p>{postdata.title} </p>
                            </div>
                            <div className="text">
                                <p dangerouslySetInnerHTML={content} ></p>
                        </div>
                    </div>
                </div>
                // post end
        );
    }
}

export default Post;