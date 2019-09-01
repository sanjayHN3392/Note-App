import React from 'react'
import axios from '../../config/config'
import {Link} from 'react-router-dom'

class NotesShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            note:{}
        }
        this.handleRemove=this.handleRemove.bind(this)
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/notes/${id}`)
        .then((response=>{
            this.setState(()=>({
                note:response.data
            }))
        }))
    }

    handleRemove=(e)=>{
        const id=this.props.match.params.id
        const confirmRemove=window.confirm('are you sure')
        if(confirmRemove){
        axios.delete(`/notes/${id}`)
            .then(()=>{   
                this.props.history.push('/notes')
            })
        }
    }

        render(){
            return(
                <div>
                    <div class="container">
                        <h2>Title:  {this.state.note.title}</h2>
                        <p>  body:    {this.state.note.body}</p>

                        <p>Category:{this.state.note.category && this.state.note.category.name}</p>
                    
                        <Link to='/notes'>Back</Link>
                        <Link to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link>
                        <button  class="btn btn-primary" value="delete" onClick={this.handleRemove}>delete</button>
                        </div>
                </div>
            )
        }
    }
export default NotesShow