
import './App.css';
import Users from './components/Users/Users';
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home';
import UserDetail from "./components/UserDetail/UserDetail"
import UsersList from "./pages/UsersList"
function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<UserDetail />} />
        <Route path='/users-list' element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
