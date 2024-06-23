import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './pages/Account'
import Home from './pages/Home'
import Login from './pages/Login'
import Musics from './pages/Musics'
import Signup from './pages/Signup'
import Layout from './ui/Layout'

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='account' element={<Account />} />
               <Route path='musics' element={<Musics />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<div>Not Found</div>} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
