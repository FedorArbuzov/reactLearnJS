import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {comment} = this.props;
        return(
            <p>{comment.list}</p>
        )
    }
}

export default Comment