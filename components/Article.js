import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpenComment: true
    }


    render(){
        const {article} = this.props;
        console.log(article.comments);
        const comments = this.state.isOpenComment && <CommentList commentList={article.comments}/>;
        return(
            <div>
                <p>{article.text}</p>
                {comments}
            </div>
        )
    }
}

export default Article