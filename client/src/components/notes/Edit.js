import React from 'react'
import NotesForm from './components/notes/Form'

class NotesEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            note:{}
        }
    }
        render(){
            return(
                <div>
                    <h2>Edit Note</h2>
                    <NotesForm/>
                </div>

            )
        }
    }

    export default NotesEdit