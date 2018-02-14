import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render(){
        const {commentList} = this.props;
        console.log(commentList);
        const commentElements = commentList.map((comment, index) => <li key={index}>
            <Comment comment={comment} />
        </li>);
        return (
            <ul>
                {commentElements}
            </ul>

        )
    }
}

export default CommentList