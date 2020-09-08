import React, {Component} from 'react';
import Main from '../template/Main';
import axios from 'axios';

//Extern components
import Form from './Form/Form';
import Input from './Form/Input';
import Button from './Form/Button';
import Table from './Table/Table'
import Rows from './Table/Rows';

const headerProps = {
    icon: 'users',
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: {name: '', email: ''},
    list: []
}


export default class UserCrud extends Component{

    state = {...initialState};

    constructor(props){
        super(props);
        
        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.load = this.load.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    componentWillMount(){
        axios(baseUrl).then(response => {
            this.setState({list: response.data})
        })

    }

    clear() {
        this.setState({user: initialState.user});
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(response => {
                const list = this.getUpdatedList(response.data);
                this.setState({user: initialState.user, list});

            }) 
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(response =>{
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
            }
        );


    }

    load(user){
        this.setState({ user });
    }


    getUpdatedList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.push(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <Form>

                {/*Inputs*/}
                <Input value={this.state.user.name} change={this.updateField} 
                        name="name" field="nome">
                </Input>

                <Input value={this.state.user.email} change={this.updateField}
                        name="email" field="email">
                </Input>

                {/*Buttons*/}
                <Button action={this.save} actionType="Salvar" background="primary" ml=''/>
                <Button action={this.clear} actionType="Cancelar" background="danger" ml='ml-3'/>

            </Form>


        )
    }

    renderTable(){
        return(
            <Table>
                <Rows list={this.state.list}
                      load={this.load} remove={this.remove}/>
            </Table>
        )
    }


    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}