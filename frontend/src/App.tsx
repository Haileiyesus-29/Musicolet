import Layout from './ui/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<h1>Home</h1>} />
               <Route path='account' element={<h1>About</h1>} />
               <Route path='musics' element={<h1>My Musics</h1>} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
