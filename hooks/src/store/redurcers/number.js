export default function NumberReducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'Mult7':
            return {...state, number: state.number * 7}
        case 'Div25':
            return {...state, number: state.number / 25}
        case 'Parse':
            return {...state, number: parseInt(state.number)}
        case 'NumberAdd':
            return {...state, number: state.number + action.number }            
        default:
            return state
    }
}