
const NEW_QUOTE = 'NEW_QUOTE';
const defaultQuote = {
    quote: 'I GOTTA BE THE VERY BEST....',
    author: 'Ash Ketchum',
    work: 'Pokemon'
}

const quoteReducer = (state=defaultQuote, action) => {
    console.log('NEW quote: '+JSON.stringify(action));
    switch (action.type){
        case NEW_QUOTE: return { 
            ...state, 
            quote: action.payload.quote, 
            author: action.payload.author, 
            work: action.payload.work
        }
        default: return state;
    }
    return state;
};

export default quoteReducer;
