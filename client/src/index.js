import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import NotesList from './components/notes/Lists'

import NotesNew from './components/notes/New'

import NotesShow from './components/notes/Show'

class App extends React.Component{


    render(){
        return(
            <BrowserRouter>
            <div>
                <h1>My Notes App</h1>
                <Link to="/notes">Listing notes</Link>
            <Switch>
                <Route path='/notes' component={NotesList} exact={true}/>
                <Route path='/notes/New' component={NotesNew}/>
                <Route path='/notes/:id' component={NotesShow}/>
    
            </Switch>
            </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))