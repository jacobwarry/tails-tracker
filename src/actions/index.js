export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        id: item.id,
        title: item.title,
        image: item.image,
        category: item.category
    };
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}