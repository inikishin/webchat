const styles = {
    groupsWrapper: {

        padding: 0,
    },
    groupsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'start',
        height: 65,
    },
    ul: {
        padding: 0,
        height: 'calc(100vh - 150px - 65px)',
        overflow: 'auto',
    },
    li: {
        listStyleType: 'none',
    },
    groupWrapper: {
        paddingTop: 30,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 20,
        height: 150,
        textAlign: 'start',
    },
    groupWrapperActive: {
        paddingTop: 30,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 20,
        height: 150,
        textAlign: 'start',
        background: 'linear-gradient(to right bottom, #7CB8F7, #2A8BF2) !important', // #7CB8F7
    },
    groupHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        marginBottom: 20,
    },
    avatarImg: {
        height: 54,
        width: 54,
        marginRight: 20,
    },
};

export default styles;