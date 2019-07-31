import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class NotesList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3006/notes')
        .then(response=>{
            this.setState(()=>({
                notes:response.data
            }))
        })
    }
    render(){
        return(
            <div>
                <h2>Listing Notes {this.state.notes.length}</h2>

                <ul>{
                    this.state.notes.map(note=>{
                        return <li key={note._id}><Link to={`/notes/${note._id}`}>{note.title}</Link></li>
                    })}
                </ul>
                <Link to='/notes/New'>Add Note</Link>

            </div>
        )
    }
}

export default NotesList