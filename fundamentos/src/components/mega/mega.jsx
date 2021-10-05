import {setState} from 'react'
import Generation from './Aleatorio'

export default function Megasena() {
    const [mega, setMega] = setState('aperte o buttom')

    function Event(mega) {
        mega = Generation(7).join(' - ')
        setMega(mega)
    }

     return (
        <div>
            {mega}
            <button onClick={Event}>Aperte</button>
        </div>
    )
}