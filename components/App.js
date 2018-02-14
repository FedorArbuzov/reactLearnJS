import React from 'react'
import NewsList from './NewsList'
import articlesList from '../src/fixtures'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <NewsList articles={articlesList}/>
        </div>
    )
}

export default App