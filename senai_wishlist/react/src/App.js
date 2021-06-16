import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';


class CadastraDesejos extends Component{
  constructor(props){
    super(props);
    this.state = {
      titulo: '',
      desejo: '',
      idUsuario: 0
    }
  }
  
  NomeTitulo = async (event) =>{
    console.log('foi')
    await this.setState({titulo: event.target.value})
    
  }
  NomeDesejo = async (event) => {
    await this.setState({desejo: event.target.value})
    console.log('foi')
  }
  IdUser = async (event) => {
    await this.setState({idUsuario: event.target.value})
  }

  cadastrarDesejos = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/api/desejos', {
      method: 'POST',
      body: JSON.stringify({NomeDesejo: this.state.NomeDesejo, NomeTitulo: this.state.NomeTitulo, idUsuario: this.state.idUsuario}),
      headers:{
        "Content-Type": "application/json"
      }
    })
  }
  render(){
    return (
      <div className='App'>
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Cadastre seu desejo ;)</title>
          <link rel="stylesheet" href="_cdn/css/style.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Alatsi&family=Barriecito&display=swap" rel="stylesheet" />
          <main>
            <div className="form">
            <Link to="/Desejos">Visualizar todos os Desejos</Link>
              <h1>CADASTRAR DESEJO</h1>
              <form onSubmit={this.cadastrarDesejos}>
                <input type="number" name="id" id="idd" value={this.state.idUser} onChange={this.idUser} placeholder="Digite o seu ID" />
                <input type="text" name="desejo" id="desejo" value={this.state.NomeTitulo} onChange={this.NomeTitulo} placeholder="DIGITE O TÍTULO DO DESEJO" required />
                <textarea cols={20} rows={10} value={this.state.NomeDesejo} onChange={this.NomeDesejo} placeholder="ME CONTE O QUE VOCÊ DESEJA...." defaultValue={""} />
                <button type="submit" className="login">ENVIAR</button>
                <button type="reset" className="limpar">LIMPAR</button>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default CadastraDesejos;
