import './App.css';
import InputSection from './components/InputSection';
import InfoBar from './components/InfoBar';
import ChatArea from './components/ChatArea';

function App() {
  return (
    <div className="App">
      <InfoBar/>
      <ChatArea/>
      <InputSection/>
    </div>
  );
}

export default App;
