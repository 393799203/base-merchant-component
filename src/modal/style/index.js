const style = {
    modalWrap: {
        position: 'fixed',
        display: 'none',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1025
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
        borderRadius: '4px',
        WebkitTransition: 'box-shadow 300ms ease',
        MozTransition: 'box-shadow 300ms ease',
        transition: 'box-shadow 300ms ease',
        zIndex: 0
    },

    modalActive: {
        boxShadow: '0 1px 4px 0 rgba(53, 59, 68, 0.23), 0 0 12px 0 rgba(25, 36, 50, 0.05)',
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
        color: '#777',
        fontSize: 18,
        fontFamily: 'SimSun, sans-serif',
        textAlign: 'center'
    },

    modalHeader: {
        position: 'relative',
        height: 50,
        paddingLeft: 15,
        fontSize: '14px',
        background: '#fff',
        lineHeight: '50px',
        borderBottom: '1px solid #F5F5F5',
        WebkitUserSelect: 'none',
        userSelect: 'none'
    },
    modalTitle: {
        color: '#333',
        marginRight: 40,
        fontSize: 15,
        border: 'none'
    },

    modalBody: {
        padding: 15
    },
    modalFooter: {
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        background: '#fff',
        lineHeight: '50px',
        textAlign: 'right',
        borderTop: '1px solid #F5F5F5',
        WebkitUserSelect: 'none',
        userSelect: 'none'
    },
    alertWrap: {
        padding: '0 40px',
        fontSize: 16,
        textAlign: 'center'
    },

    alertContent: {
        marginBottom: 20
    }
};

export default style;
