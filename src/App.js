import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/chatFeed'
import LoginForm from './components/LoginForm'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height = "100vh"
            projectID= `${ process.env.projid }`
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;
