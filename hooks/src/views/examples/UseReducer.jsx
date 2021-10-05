import React, { useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { intialState, reducer } from '../../store'

import {numberAdd2, login} from '../../store/actions'



const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
            {state.user ? <span className="text">{state.user.nome}</span> : <span className="text">sem User</span> }

                <span className="text">{state.number}</span>
                <button className="btn" onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                <button className="btn" onClick={() => login( dispatch, 'papai' )}>Login</button>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'Mult7'})}>7x</button>
                    <button className="btn" onClick={() => dispatch({type: 'Div25'})}>: 25</button>
                    <button className="btn" onClick={() => dispatch({type: 'Parse'})}>ParseInt()</button>
                    <button className="btn" onClick={() => numberAdd2( dispatch )}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
