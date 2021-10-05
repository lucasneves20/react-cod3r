import { Fragment } from 'react';
import Aleatorio from './components/basicos/Aleatorio';
import Mega from './components/mega/Mega';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro'
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import Contador from './components/contador/Contador';
import Card from './components/layout/Card'
import Input from './data/formulario/Input';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';

import './style/global.css'
import Megasena from './components/mega/mega';

function App() {
  return (
    <div className="App">
		<div className="container-card">
            <Card titulo="#12 - Contador" color="#424242">
                <Mega></Mega>
            </Card>

			<Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Fernando" }} />
                {/* <UsuarioInfo usuario={{}} />
                <UsuarioInfo /> */}
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragment />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
		</div>
    </div>
  )
}

export default App;