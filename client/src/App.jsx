import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Main from "./layout/Main"
import Home from "./routes/Home"
import Search from "./routes/Search"
import ServantList from "./routes/ServantList"

function App() {
  return (
    // <div className="">
    //     <Sidebar />
    // </div>
    <Routes>
      <Route path="/" element={<Main />} >
        <Route index element={<Home />} />
        <Route path="search" element={<Search />}/>
        <Route path="servantlist" element={<ServantList />}/>
      </Route>
    </Routes>
  )
}

export default App
