 import React from 'react'
 import axios from "axios"
 import { Link} from 'react-router-dom'

class NotesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            category:'',
            categories:[],
            addCategory:''
            
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }

    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    

    handleSubmit(e){
        e.preventDefault()
        const formData={
            title:this.state.title,
            body:this.state.body,
            category:this.state.category
           
        }
        this.props.handleSubmit(formData)
    }

    componentDidMount(){
        axios.get('http://localhost:3006/categories')
        
            .then((response)=>{
                console.log(response.data)
                this.setState(()=>({
                    categories:response.data
                }))
            })
    }

    componentWillReceiveProps(nextprops){
        this.setState(()=>({
            title:nextprops.note.title,
            body:nextprops.note.body,
            category:nextprops.note.category._id
        }))
    }
    render(){
        console.log(this.state.categories)
        return(
            <div class='form-group'>
                
                <form onSubmit={this.handleSubmit}>
                    
                  
                    <label>
                    <div class="container">
                        category
                        <select  value={this.state.category}  name="category" onChange={this.handleChange}>
                            <option value="">select</option>
                            {this.state.categories.map((category)=>{
                                return <option key={category._id} value={category._id}>{category.name}</option>
                            })}
                        </select>
                        </div>
                    </label><br/>
                    
                    <div class='form-group'>
                    <label>
                    <div class="container">
                        title
                        <input type='text'  class="form-control" value={this.state.title} onChange={this.handleChange} name="title"/>
                            </div>
                    </label><br/>
                    </div>
                    <div class='form-group'>
                    <label>
                    <div class="container">
                        body
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.body} onChange={this.handleChange} name='body'></textarea>
                        </div>
                    </label><br/>
                    </div>
                    <label>
                        <div class="container">
                        <button class="btn btn-primary"><Link to='/notes'>back</Link></button>
                        </div>
                    </label>
                    <label>
                    <div class="container">
                    <input type='submit' class="btn btn-primary" value="submit"/>
                    </div>
                    </label>
                </form>
        

            </div>
        )
    }
}
export default NotesForm