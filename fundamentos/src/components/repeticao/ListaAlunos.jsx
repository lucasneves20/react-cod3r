import React from 'react'
import alunos from '../data/alunos'
import '../../style/components/alunos.css'

export default function Alunos () {
    //const li1 = alunos.map((alunos) => { return <li>{alunos[0].id}</li> }) 
    const alunosJSX = alunos.map(function (alunos) {
        return (
            <div>
                <li key={alunos.id} className="espacamento">
                    {alunos.id}{')'} {alunos.nome} {'>'} {alunos.nota}
                    {/* é o mesmo que */}
                    {/* {alunos[0].id} {alunos[0].nome alunos[0].nota} */}
                </li>
            </div>
        )
    })

    return (
        <div>
            <ul id="Ul">
                {alunosJSX}
            </ul>
        </div>
    )
}
