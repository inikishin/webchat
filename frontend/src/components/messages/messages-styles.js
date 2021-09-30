const styles = {
    messagesWrapper: {
        height: 'calc(100vh - 140px)',
    },
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '28px 38px 28px 60px',
        backgroundColor: '#FAFBFF',
        borderBottom: 'solid 2px #F3F3FB',
    },
    headerTextWrapper: {
        display: 'flex',
        textAlign: 'start'
    },
    avatarImg: {
        height: 54,
        width: 54,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: '50%'
    },
    messagesMainWrapper: {
        padding: '30px 60px',
    },
    messagesList: {
        overflow: 'auto',
        maxHeight: 'calc(100vh - 420px)',
    },
    sendAreaWrapper: {
        borderTop: 'solid 2px #F3F3FB',
        paddingTop: 30,
        display: 'grid',
        gridTemplateColumns: '60px auto 60px',
    },

    messageWrapper: {
        maxWidth: '80%',
        display: 'flex',
        justifyContent: 'start',
        marginBottom: 15,
    },
    ownMessageWrapper: {
        maxWidth: '-80%',
        display: 'flex',
        justifyContent: 'end',
        marginBottom: 15,
    },
    messageTextDate: {

    },
    messageDate: {
        textAlign: 'end'
    },
    message: {
        borderRadius: '0px 10px 10px 10px',
        padding: '15px 25px',
        textAlign: 'start',
        background: 'linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%);',
        boxShadow: '10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1)',
    },
    ownMessage: {
        borderRadius: '10px 0px 10px 10px',
        border: '1px solid rgba(112, 124, 151, 0.25)',
        boxShadow: '10px 10px 25px rgba(112, 124, 151, 0.05), 15px 15px 35px rgba(112, 124, 151, 0.05)',
        padding: '15px 25px',
        textAlign: 'end',
    },
};

export default styles;