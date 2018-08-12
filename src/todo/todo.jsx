import React, {Component} from 'React'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import Todolist from './todoList'
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
        console.log(this.state.description)
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