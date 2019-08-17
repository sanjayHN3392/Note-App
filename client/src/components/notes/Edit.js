import React from 'react'
import NotesForm from './Form'
import axios from '../../config/config'

class NotesEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            note:{}
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/notes/${id}`)
            .then((response)=>{
                this.setState(()=>({
                    note:response.data
                }))
            })
    }
     handleSubmit(formData){
        axios.put(`/notes/${this.state.note._id}`,formData)
            .then(response=>{
               if(response.data.hasOwnProperty("errors")){
                   console.log(response.data.errors)
               }else{
                   this.props.history.push(`/notes/${this.props.match.params.id}`)
               }
            })
     }
        render(){
            return(
                <div>
                    <div class="container">
                        
                    <h2>Edit Note</h2>
                    <NotesForm  handleSubmit={this.handleSubmit} note={this.state.note}/>
                    </div>
                </div>

            )
        }
    }


        export default NotesEdit