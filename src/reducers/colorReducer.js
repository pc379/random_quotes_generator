const NEW_COLOR = 'NEW_COLOR';
const defaultColor = {
    color: 'rgb(200,200,100)'
}
const colorReducer = (state = defaultColor, action) => {
    console.log('NEW color: '+JSON.stringify(action));
    switch (action.type) {
        case NEW_COLOR : return {...state, color: action.payload}
        default: return state;
    }    
    // return state;
}
export default colorReducer;