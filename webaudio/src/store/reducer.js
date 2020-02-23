const initialState = {
    registered: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'SIGNUP') {
    return {
        ...state,
        registered : true}
    }
    return state;
};

export default reducer;