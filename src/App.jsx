import './App.css'
import Sidebar from './componentes/sidebar.jsx'

function App() {
  return (
    <>
      <div id="crt-overlay"></div>

      <Sidebar />

      <main id="center">
        <h1>Hola como estas</h1>
      </main>
    </>
  );
}

export default App;