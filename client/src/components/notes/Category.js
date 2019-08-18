import React from "react"
import axios from '../../config/config'

class AddCategory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
        this.handlenameChange=this.handlenameChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
       
    }
    handlenameChange(e){
       const name=e.target.value
       this.setState(()=>({name}))
    }

    handleSubmit(e){
        e.preventDefault()
        const categoryData={
            name:this.state.name
        }
        console.log(categoryData)
    
        axios.post('/categories',categoryData)
        .then(response=>{
            console.log(response.data)
            if(response.data.hasOwnProperty("errors")){
                console.log(response.data.errors)
            }else{
                this.props.history.push('/notes/New')
            }
        })
    }

    render(){
        return(
            <div>
                
                <form onSubmit={this.handleSubmit}>
                
                <label>
                    Add Category
                    <input type="text" value={this.state.category} name="name" onChange={this.handlenameChange}/>
                </label><br/>
                <label>
                    <input type="submit" value="submit"/>
                </label>
                </form>
            </div>
        )
    }
}
export default AddCategory