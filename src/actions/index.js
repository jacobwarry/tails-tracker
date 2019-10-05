export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        id: item.id,
        sortIndex: item.sortIndex,
        title: item.title,
        image: item.image,
        category: item.category,
        subcategory: item.subcategory
    };
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}