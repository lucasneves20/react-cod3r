import React from 'react'
import { useParams } from 'react-router-dom'

export default function Param() {
    const { id } = useParams()
    return (
        <div>
            <h1>Param</h1>
            <p>Index: {id}!</p>
        </div>
    )
}
