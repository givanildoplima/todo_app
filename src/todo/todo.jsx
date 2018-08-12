import React, {Component} from 'React'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import Todolist from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
        .then(resp => console.log('funcionou'))
        
    }

    render() {
        return (
            <div>
               <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
               <TodoForm description={this.state.description}
               handleChange={this.handleChange}
               handleAdd={this.handleAdd} />
               <Todolist />
            </div>
        )
    }
}   