 import React from 'react'
 import axios from "axios"

class NotesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            category:'',
            categories:[],
            addCategory:[]
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
            category:this.state.category,
            addCategory:this.state.addCategory
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
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add category
                        <input type='text' value={this.state.addCategory} onChange={this.handleChange} name="Add Category"/>
                    </label><br/>

                    <label>
                        category
                        <select value={this.state.category}  name="category" onChange={this.handleChange}>
                            <option>select</option>
                            {this.state.categories.map((category)=>{
                                return <option key={category._id} value={category._id}>{this.state.category && this.state.category.name}</option>
                            })}
                        </select>
                    </label><br/>
                    <label>
                        title
                        <input type='text' value={this.state.title} onChange={this.handleChange} name="title"/>

                    </label><br/>
                    <label>
                        body
                        <textarea value={this.state.body} onChange={this.handleChange} name='body'></textarea>
                    </label><br/>
                    <input type='submit'/>
                </form>

            </div>
        )
    }
}
export default NotesForm