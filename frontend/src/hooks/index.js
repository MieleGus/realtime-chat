import { AuthProvider } from './Auth';
import { SocketProvider } from './Socket';
import { SnackbarProvider } from 'notistack';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <SocketProvider>
      <SnackbarProvider 
          maxSnack={3}
          anchorOrigin={{vertical: 'top',  horizontal: 'right' }}
        >
        {children}
      </SnackbarProvider>
    </SocketProvider>
  </AuthProvider>
)

export default AppProvider