import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import NotesList from './components/notes/Lists'

import AddCategory from './components/notes/Category'
import NotesNew from './components/notes/New'

import NotesShow from './components/notes/Show'
import NotesEdit from './components/notes/Edit'


class App extends React.Component{


    render(){
        return(
            <BrowserRouter>
            <div class="container-fluid">
                <h1>My Notes App</h1>
                <h2><Link to="/notes">Listing notes</Link></h2>
                
            <Switch>
                <Route path='/notes' component={NotesList} exact={true}/>
                <Route path='/notes/Category' component={AddCategory}/>
            
                <Route path='/notes/New' component={NotesNew}/>
                <Route path='/notes/Edit/:id' component={NotesEdit}/>
                <Route path='/notes/:id' component={NotesShow}/>
    
            </Switch>
            </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))