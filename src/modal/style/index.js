
'use strict';
/**
 * Created by neo on 27/7/15.
 */

module.exports = {
    modalWrap: {
        position: 'fixed',
        display: 'none',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000
    },

    modalWithoutMask: {
        background: 'transparent'
    },
    
    modal: {
        position: 'absolute',
        minWidth: 400,
        top: '50%',
        left: '50%',
        background: '#fff',
        border: '1px solid #e8e8e8',
        WebkitTransition: 'box-shadow 300ms ease',
        MozTransition: 'box-shadow 300ms ease',
        transition: 'box-shadow 300ms ease',
        zIndex: 0
    },

    modalActive: {
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4)',
        zIndex: 10
    },

    modalMask: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: '#000',
        opacity: 0.5,
        filter: 'alpha(opacity=50)',
        zIndex: 5
    },

    modalClose: {
        position: 'absolute',
        display: 'block',
        width: 40,
        top: 0,
        right: 0,
        color: '#c4c4c4',
        fontSize: 30,
        fontFamily: 'SimSun, sans-serif',
        textAlign: 'center'
    },

    modalHeader: {
        position: 'relative',
        height: 45,
        paddingLeft: 20,
        background: '#f4f5fa',
        lineHeight: '44px',
        WebkitUserSelect: 'none',
        userSelect: 'none'
    },
    modalTitle: {
        lineHeight: '44px',
        marginRight: 40,
        fontSize: 16
    },

    modalBody: {
        paddingTop: 40,
        paddingBottom: 40
    },

    alertWrap: {
        // maxWidth: 600,
        padding: '0 40px',
        fontSize: 16,
        textAlign: 'center'
    },

    alertContent: {
        marginBottom: 20
    }
};
