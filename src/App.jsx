import './App.css';
import { useEffect, useState } from 'react';
// import Footer from './components/Footer';
import List from './components/List';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar.jsx';
import Home from './pages/Home';
import Login from './pages/Login';

const apiUrl = process.env.API_URL || "https://tc2004bbackend-production.up.railway.app";
function App() {
  const [items, setItems] = useState([]);
  // const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {if (isLogin) {getItems();}}, [isLogin]);

  const getItems = async () => {
    const result = await fetch(`${apiUrl }/items/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("Token")
      },
    });
  
    const data = await result.json();
    setItems(data);
  };
  
  const add = async (item) => {
    //item.id = items.length + 1; 
    const result = await fetch(`${apiUrl }/items/`, {
      method:"POST", 
      headers:{
        "content-type":"application/json",
        "Authorization": localStorage.getItem("Token")
       },
      body:JSON.stringify(item), });
    const data = await result.json();
    setItems([...items, data.item]);
  };

  const del = async (id) => {
    await fetch(`${apiUrl }/items/` + id, {
      method:"DELETE",
      headers:{
        "Authorization": localStorage.getItem("Token")
       },
    });
    setItems(items.filter((item) => item.id !== id));
  };


  const login = async (user) => {
    const result = await fetch(`${apiUrl }/login/`, {
      method:"POST",
      headers:{"content-type":"application/json"
      },
      body:JSON.stringify(user),
    });
    const data = await result.json();
    localStorage.setItem("Token", data.token);
    console.log(getItems("Token"));
    setIsLogin(data.isLogin);
    return data.isLogin;
  };



  const logout = () => {
    setIsLogin(false);
  }
  return (
    <div>
      <BrowserRouter> 
        {isLogin && <ResponsiveAppBar logout={logout}/>}
        <Routes>
          <Route path="/" element={<Login login={login}/>} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<List items={items} ondelete={del} />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;