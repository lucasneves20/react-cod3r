import React from 'react'
import produtos from '../data/produtos'
import '../../style/components/tabelaProdutos.css'

export default function Produtos () {
    //const li1 = alunos.map((alunos) => { return <li>{alunos[0].id}</li> }) 
    const ProdutosIdJSX = produtos.map(function (produtos) {
        return (
            <div>
                <li key={produtos.id}>
                    {produtos.id}
                    {/* é o mesmo que */}
                    {/* {Produtos[0].id} {Produtos[0].nome Produtos[0].preco} */}
                </li>
            </div>
        )
    })

    const ProdutosNomeJSX = produtos.map(function (produtos) {
        return (
            <div>
                <li key={produtos.id}>
                    {produtos.nome}
                    {/* é o mesmo que */}
                    {/* {Produtos[0].id} {Produtos[0].nome Produtos[0].preco} */}
                </li>
            </div>
        )
    })

    const ProdutosPrecoJSX = produtos.map(function (produtos) {
        return (
            <div>
                <li key={produtos.id}>
                    R$ {produtos.preco}
                    {/* é o mesmo que */}
                    {/* {Produtos[0].id} {Produtos[0].nome Produtos[0].preco} */}
                </li>
            </div>
        )
    })

    return (
        <div>
        <strong>Forma sem {'<table>'}</strong>
            <div className="container-produtos" >
                
                <ul className="tabela-produtos borda">
                    <span className="borda-baixo">Id</span>
                    {ProdutosIdJSX}
                </ul>
                <ul className="tabela-produtos borda">
                <span className="borda-baixo">Produtos</span>
                    {ProdutosNomeJSX}
                </ul>
                <ul className="tabela-produtos borda">
                <span className="borda-baixo">Preço</span>
                    {ProdutosPrecoJSX}
                </ul>
            </div>
        </div>
    )
}
