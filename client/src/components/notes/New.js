import React from 'react'
import axios from 'axios'
import NotesForm from './Form'

class NotesNew extends React.Component{
    constructor(props){
        super()
        
            this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleSubmit(formData){
        console.log(formData)
        axios.post('http://localhost:3006/notes',formData)
            .then(response=>{

                // console.log(response)
                if(response.data.hasOwnProperty('errors')){
                    console.log(response.data.erros)
                }else{
                    this.props.history.push(`notes/${response.data._id}`)
                }
            })
    }

    render(){
        return(
            <div>
                <h2>add New Note</h2>
               
               <NotesForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default NotesNew