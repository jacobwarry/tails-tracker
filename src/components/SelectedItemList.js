import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/';
import SelectedItem from './SelectedItem';

const SelectedItemList = ({items, onDeleteItem}) => {

    const selectedByCategory = [];

    if (items.length) {
        items.sort((a, b) => a.sortIndex > b.sortIndex ? 1 : -1);
        const categoryNames = items.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
        categoryNames.forEach(categoryName => {
          const category = {
            'name': categoryName,
            'items': items.filter(item => item.category === categoryName).sort((a, b) => a.sortIndex > b.sortIndex ? 1 : -1)
          };
          selectedByCategory.push(category);
        });
    }

    return  (
        <div className="tails-selected">
            <div className="big-title">Selected</div>
            {selectedByCategory.length
                ? selectedByCategory.map(function(category) {
                    return (
                        <div className="selected-container" key={category.name}>
                            <div className="selected-title">{category.name}</div>
                            {category.items.map(item =>
                                <SelectedItem
                                    key={item.id}
                                    item={item}
                                    onDeleteItem={() => onDeleteItem(item.id)}
                                />
                            )}
                        </div>
                    )
                })
                : <div className="selected-none">No content selected</div>
            }
        </div>
    )  
}

const mapStateToProps = (state) => {
    return {
        items: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItem: (id) => dispatch(deleteItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItemList);