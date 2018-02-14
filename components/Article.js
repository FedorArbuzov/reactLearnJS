import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpenComment: false
    };


    render(){
        const {article} = this.props;
        console.log(article.comments);
        const comments = this.state.isOpenComment && <CommentList commentList={article.comments}/>;
        return(
            <div>
                <p>{article.text}</p>
                <button onClick={this.handleClickComment}>
                    {this.state.isOpenComment ? 'close comments' : 'open comments'}
                </button>
                {comments}
            </div>
        )
    }

    handleClickComment = () => {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    }
}

export default Article