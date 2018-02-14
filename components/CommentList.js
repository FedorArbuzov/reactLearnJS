import React, {Component} from 'react'
import Comment from './CommentList'

class CommentList extends Component {
    render(){
        const {commentList} = this.props;
        console.log(commentList);
        const commentElements = commentList.map((comment, index) => <li key={index}>
            <div>
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
            </div>
        </li>);
        return (
            <ul>
                {commentElements}
            </ul>

        )
    }
}

export default CommentList