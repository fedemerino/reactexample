import Router from "./Router"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div style={{width: '100vw', height: '100vh',display:'flex', justifyContent:'center', alignItems: 'center'}}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )
}

export default App
