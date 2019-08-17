import React from 'react'
import axios from '../../config/config'
import {Link} from 'react-router-dom'

class NotesList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        axios.get('/notes')
        .then(response=>{
            this.setState(()=>({
                notes:response.data
            }))
        })
    }
    render(){
        return(
            <div>
                <div class="container">
                <h4>Listing Notes {this.state.notes.length}</h4>
            
                </div>

                <ul>
                <div class="container">{
                    this.state.notes.map(note=>{
                        return <li key={note._id}><Link to={`/notes/${note._id}`}>{note.title}</Link></li>
                    })}
                    </div>
                </ul>
                <div class="container">
                <h3><Link to='/notes/New'>Add Note</Link></h3>
                </div>

            </div>
        )
    }
}

export default NotesList