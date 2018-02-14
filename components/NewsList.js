import React, {Component} from 'react'
import ArticleWrapper from './ArticleWrapper'

class NewsList extends Component {
    render(){
        const articleElements = this.props.articles.map((article, index) => <li key={index}>
            <ArticleWrapper article = {article}/>
        </li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default NewsList