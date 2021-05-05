import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "b2610367-358a-44e3-8364-ff02987a7be8", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get("https://api.chatengine.io/chats", { headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            setError("Oops. The entered Login info is incorrect!")
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">LOGIN</h1>
                <h3 className="error">{error}</h3><br />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Enter Username ..." required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Enter Password ..." required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;