import React from 'react'
import axios from '../../config/config'
import NotesForm from './Form'

class NotesNew extends React.Component{
    constructor(props){
        super()
        
           
        this.handleSubmit=this.handleSubmit.bind(this)    
        
    }
    
    
    
    handleSubmit(formData){
        console.log(formData)
        axios.post('/notes',formData)
            .then(response=>{

                 console.log(response)
                if(response.data.hasOwnProperty('errors')){
                    console.log(response.data.erros)
                }else{
                    this.props.history.push('/notes')
                }
            })
    }
    

    render(){
        return(
            <div>
                <div class="container">
                <h2>add New Note</h2>
               
               <NotesForm handleSubmit={this.handleSubmit}/>
               </div>
            </div>
        )
    }
}
export default NotesNew