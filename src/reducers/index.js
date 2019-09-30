import { createStore } from 'redux'

const items = (state = [], action) => {
    if (state.length && action.type === 'ADD_ITEM') {
        const existingItem = state.filter((item) => item.id === action.id)[0];
        if (existingItem) {
            return state;
        }
    }

    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, {
                id: action.id,
                title: action.title,
                image: action.image,
                category: action.category
            }];
        case 'DELETE_ITEM':
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
}

export default createStore(items);