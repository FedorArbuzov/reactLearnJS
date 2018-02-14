import React from 'react'
import Article from './Article'
import articles from '../src/fixtures'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article article={articles[0]} />
            <Article article={articles[1]} />
            <Article article={articles[2]} />
        </div>
    )
}

export default App