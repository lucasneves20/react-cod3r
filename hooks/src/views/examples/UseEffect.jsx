import React,  { useEffect, useState }  from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial (num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function calcParImpar (num) {
    if ((num % 2) === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [tabela, setTabela] = useState('Esperando numero')

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        setTabela(calcParImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="exercício #1"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial : </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="exercício #2"/>
            <div className="center">
                <div>
                    <span className="text">É par ou impar?</span>
                    <span className="text red">{tabela}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect