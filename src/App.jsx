
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login.jsx';
import { AuthProvider } from './Contexts/AuthContext.jsx';
import { Home } from './Pages/Home.jsx';
import { PrivateRoute } from './Componentes/PrivateRoute.jsx';
import { Prefeitura } from './Pages/Prefeitura.jsx';
import { Cadastro } from './Pages/Cadastro.jsx';


function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Cadastro/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={
              <PrivateRoute>

                <Home/>

              </PrivateRoute>
            }/>
            <Route path='/prefeitura' element={
              <PrivateRoute>

                <Prefeitura/>

              </PrivateRoute>
            }/>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
