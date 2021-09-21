import './app.css';

import {useSelector} from 'react-redux';

import Chat from "../chat/chat";
import Login from '../login/login';

function App() {
    const {isAuthenticated} = useSelector(store => ({...store.auth}));

    return (
        <div className="App">
            {isAuthenticated ? <Chat /> : <Login />}
        </div>
    );
}

export default App;
