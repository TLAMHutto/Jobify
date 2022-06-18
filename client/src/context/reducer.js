import { DISPLAY_ALERT } from "./actions";
import { CLEAR_ALERT } from "./actions";
const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertMessage: 'Please provide all the required fields',
            alertType: 'danger',
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertMessage: '',
            alertType: '',
        }
    }
    throw new Error(`No such action : ${action.type}`);
}
export default reducer;