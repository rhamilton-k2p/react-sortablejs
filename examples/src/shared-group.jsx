import React from 'react';
import Sortable from 'react-sortablejs';

const sortableOptions = {
    ref: 'list',
    model: 'items',
    group: 'shared'
};

class SharedGroup extends React.Component {
    static propTypes = {
        items: React.PropTypes.array
    };
    static defaultProps = {
        items: []
    };

    state = {
        items: this.props.items
    };
    
    render() {
        const items = this.state.items.map((text, index) => (
            <li key={index}>{text}</li>
        ));
        
        return (
            <ul ref="list" className="block-list">{items}</ul>
        );
    }
}

export default Sortable(SharedGroup, sortableOptions);
