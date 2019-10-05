import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import Item from './Item';

const ItemList = ({ items, onAddItem }) => {

    const itemsBySubcategory = [];
    
    if (items.length) {
        const subcategoryNames = items.map(item => item.subcategory).filter((value, index, self) => self.indexOf(value) === index);
        subcategoryNames.forEach(subcategoryName => {
            const subcategory = {
                'name': subcategoryName,
                'items': items.filter(item => item.subcategory === subcategoryName).sort((a, b) => a.sortIndex > b.sortIndex ? 1 : -1)
            }
            itemsBySubcategory.push(subcategory);
        });
    }

    return  (
        <div className="category-items">
            {
                itemsBySubcategory.map((subcategory, key) =>
                    <div className="subcategory" key={key}>
                        {subcategory.name !== 'undefined'
                        ? <div className="subcategory-title">{subcategory.name}</div> 
                        : ''}
                        <div className="subcategory-items">
                        {subcategory.items.map((item) =>
                            <Item 
                                key={item.id}
                                {...item}
                                onAddItem={() => onAddItem(item)}
                            />
                        )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (item) => dispatch(addItem(item))
    };
};

export default connect(null, mapDispatchToProps)(ItemList);