export default function UserReducer(state, action) {
    switch(action.type) {
        case 'login':
            return {...state, user: state.user = { nome: action.payload } }         
        default:
            return state
    }
}