const styles = {

};

export const theme = {
    typography: {
        fontFamily: [
            'Raleway',
            'sans-serif'
        ].join(','),
        body1: {
            fontSize: 16,
            color: '#707C97',
        },
        menuItem: {
            fontSize: 16,
            fontWeight: 600,
            color: '#707C97',
            textTransform: 'uppercase',
        },
        infoGroup: {
            fontSize: 16,
            color: '#2A8BF2',
        },
        h1: {
            fontSize: 36,
            color: '#0D1C2E',
            fontWeight: 500,
        },
        h2: {
            fontSize: 20,
        },
        h3: {
            fontSize: 18,
            fontWeight: 700,
        },
        h4: {
            fontSize: 18,
        }
    },
    palette: {
        primary: {
            main: "#2A8BF2"
        },
        secondary: {
            main: '#707C97'
        },
        danger: {
            main: '#FF3366'
        }
    }
}

export default styles;