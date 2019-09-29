import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'

class SelectedItem extends React.Component {
    render() {
        return (
            <div className="selected-item">
                <div className="item-image">
                    <img src={'/images/' + this.props.item.image} alt={this.props.item.title} />
                </div>
                <div className="item-title">{this.props.item.title}</div>
                <div className="item-count">{this.props.item.count}</div> 
                <div className="item-actions">
                    <button className="action-btn" onClick={() => this.props.onIncrement()}>
                        <FontAwesomeIcon icon={faPlus} size="xs"/>
                    </button>
                    <button className="action-btn" onClick={() => this.props.onDecrement()}>
                        <FontAwesomeIcon icon={faTimes} size="xs" />
                    </button>
                </div>
            </div>
        );
    }
}

export default SelectedItem;