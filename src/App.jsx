import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Addimg from "./Pages/Addimg/Addimg";
import Liked from "./Pages/Liked/Liked";
import Account from "./Pages/Account/Account";
import Message from "./Components/Message/Message";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/addimg" element={<Addimg />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/account" element={<Account />} />
        <Route path="/message" element={<Message/>}/>
      </Routes>
    </div>
  );
}

export default App;
