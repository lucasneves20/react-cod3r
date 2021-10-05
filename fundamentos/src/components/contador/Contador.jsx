import '../../style/components/contador.css'
import Display from './Display'
import Botoes from './Botoes'
import Pass from './PassoForm'

import {Component} from 'react'

class Contador extends Component {

    state = {
            numero: this.props.numeroInc || 0,
            passo: this.props.passoInicial || 5,
        }


    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         numero: props.numeroInc
    //     }
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return  (
            <div className='contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero } />
                <Pass passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador
