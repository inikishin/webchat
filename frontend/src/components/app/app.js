import './app.css';
import {theme} from './app-styles';

import {useSelector} from 'react-redux';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Chat from "../chat/chat";
import Login from '../login/login';

const muiTheme = createTheme(theme);

function App() {
    const {isAuthenticated} = useSelector(store => ({...store.auth}));

    return (
        <ThemeProvider theme={muiTheme}>
            <div className="App">
                {isAuthenticated ? <Chat/> : <Login/>}
            </div>
        </ThemeProvider>
    );
}

export default App;
