import Topbar from "./components/Header/Topbar";
import Sidebar from "./components/Sidebar/Sidebar"
import "./App.css"
import Home from "./components/Pages/home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./components/Pages/userList/UserList";


function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/> 
        </Routes>       
      </div>
    </Router>
  );
}

export default App;
