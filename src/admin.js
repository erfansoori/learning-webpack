import React from 'react'
import {render} from 'react-dom'
import Alert from './components/Alert'
const App = (props) => {
    return <h1>
       <Alert/>
    </h1>
}
render(<App/>,document.getElementById('root'))