import NumberReducer from './number.js'
import UserReducer from './user.js'

export default function reducer(state, action) {
    let newState = NumberReducer(state, action)
    return UserReducer(newState, action)
}