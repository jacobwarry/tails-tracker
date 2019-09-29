export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        id: item.id,
        title: item.title,
        image: item.image
    };
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}

export const increment = (id) => {
    return {
        type: 'INCREMENT',
        id
    };
};

export const decrement = (id) => {
    return {
        type: 'DECREMENT',
        id
    };
};