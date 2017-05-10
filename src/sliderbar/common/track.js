import React, { PropTypes } from 'react';

class Track extends React.Component {
    render () {
        const { className,
                included,
                vertical,
                offset,
                length,
                minimumTrackStyle } = this.props;
        const style = {
            visibility: included ? 'visible' : 'hidden'
        };
        if (vertical) {
            style.bottom = `${offset}%`;
            style.height = `${length}%`;
        } else {
            style.left = `${offset}%`;
            style.width = `${length}%`;
        }
        const elStyle = {
            ...style,
            ...minimumTrackStyle
        };
        return <div className={className} style={elStyle} />;
    }
}
Track.propTypes = {
    className: PropTypes.string,
    included: PropTypes.bool,
    vertical: PropTypes.bool,
    offset: PropTypes.number,
    length: PropTypes.number,
    minimumTrackStyle: PropTypes.object
};

export default Track;
