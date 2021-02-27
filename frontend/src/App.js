import socketClient from "socket.io-client";
import GlobalStyle from './styles/global';
import Routes from './routes'

import { AuthProvider } from './hooks/index'
import { SnackbarProvider } from 'notistack';

const SERVER = "http://localhost:3333";

function App() {

  var socket = socketClient(SERVER);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ socket", socket)
  
  return (
    <div>
      <SnackbarProvider 
        maxSnack={3}
        anchorOrigin={{vertical: 'top',  horizontal: 'right' }}
      >
        <AuthProvider>
          <Routes/>
          <GlobalStyle/>
        </AuthProvider>
      </SnackbarProvider>

    </div>
  );
}

export default App;
