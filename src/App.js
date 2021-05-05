import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/chatFeed'
import LoginForm from './components/LoginForm'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height = "100vh"
            projectID= "b2610367-358a-44e3-8364-ff02987a7be8"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;