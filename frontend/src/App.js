import socketClient from "socket.io-client";
import GlobalStyle from './styles/global';
import Routes from './routes'

const SERVER = "http://localhost:3333";

function App() {

  var socket = socketClient(SERVER);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ socket", socket)
  
  return (
    <div>
      <Routes/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
