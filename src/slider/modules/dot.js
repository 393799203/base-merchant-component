import React, { Component, PropTypes } from 'react';

class Dot extends Component {
    render () {
        return (
            <div className='dot-list'>
                <ul>
                    <li />
                </ul>
            </div>
        );
    }
}

Dot.propTypes = {
    onClick: PropTypes.func
};

export default Dot;
