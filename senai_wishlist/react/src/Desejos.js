import { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

class Desejos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosDesejos: []
        }
    }

    todoDesejos = (event) => {
        console.log('caiu');
        fetch('http://localhost:5000/api/desejos')
            .then(res => res.json())
            .then(data => this.setState({ listaDesejos: data }))
    }

    componentDidMount() {
        this.todoDesejos();
    }
    render() {
        return (
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
                    <Link to="/">Cadastrar novo Desejo</Link>
                        <h1>TODOS OS DESEJOS</h1>
                        <div className='Desejos'>
                            <table>
                                <thead>
                                    <tr>Desejo</tr>
                                    <tr>Descrição</tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.todosDesejos.map((desejo) => {
                                            return (
                                                <tr key={desejo.idUser}>
                                                    {}
                                                    <td>{desejo.NomeTitulo}</td>
                                                    <td>{desejo.NomeDesejo}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

        )
    }

}
export default Desejos;