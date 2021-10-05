import numeros from '../data/numeros'
import '../../style/components/par.css'

export default function ParImpar(props) {
    const isPar = props.numero % 2 === 0 

    const tabelaParImpar = numeros.map((numeros) => {
        const par = (numeros % 2) === 0 ? 'true' : ''
        const impar = (numeros % 2) !== 0 ? 'false' : ''
        return (
            <div >
                <td>{numeros}</td>
                <td className="table">{par}</td>
                <td >{impar}</td>
            </div>
        )
    })

    return (
        <div>
            <div>
                - forma simples de renderização condicional(RC):
                <br/>
                <span>O número é: {props.numero}</span>
                <br/>
                Ele é: {isPar ? 
                    <span>Par</span> : 
                    <span>Impar</span>
                }
            </div>
            <div>
                - forma mais completa de RC(<strong>Forma com {'<table>'}</strong>):
                <table>
                    <tr>
                        <div >
                            <th>Número |</th>
                            <th>par</th>
                        </div>
                    </tr>
                    <tr>
                        {tabelaParImpar}
                    </tr>
                </table>
            </div>   
        </div>
    )
}
