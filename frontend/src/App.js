import socketClient from "socket.io-client";

const SERVER = "http://localhost:3333";

function App() {

  var socket = socketClient(SERVER);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ socket", socket)
  
  return (
    <div>
      <p>here</p>
    </div>
  );
}

export default App;
