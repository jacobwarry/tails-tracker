import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

class SelectedItem extends React.Component {
    render() {
        return (
            <div className="selected-item">
            <div className="item-image">
                    <img src={'./images/' + this.props.item.image} alt={this.props.item.title} />
                </div>
                <div className="item-count">{this.props.item.count}x</div> 
                <div className="item-title">{this.props.item.title}</div>
                <div className="item-actions">
                    <button className="action-btn btn-add" onClick={() => this.props.onIncrement()}>
                        <FontAwesomeIcon icon={faPlus} size="xs"/>
                    </button>
                    <button className="action-btn btn-default" onClick={() => this.props.onDecrement()}>
                        <FontAwesomeIcon icon={faMinus} size="xs" />
                    </button>
                    <button className="action-btn btn-delete" onClick={() => this.props.onDeleteItem()}>
                        <FontAwesomeIcon icon={faTrash} size="xs" />
                    </button>                    
                </div>
            </div>
        );
    }
}

export default SelectedItem;