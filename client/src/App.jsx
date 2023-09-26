import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cats from "./pages/Cats";
import ShopCatFood from "./pages/ShopCatFood";
import AuthPage from "../src/pages/AuthPage";
import { useState } from "react";
import CreateCat from "./components/CreateCat";
import CatDetail from "./pages/CatDetails";
import EditCat from "./components/EditCat";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      {user ? (
        <div>
          <NavBar setUser={setUser} user={user} />
          
          <Routes>
            <Route path="/cats" element={<Cats />} />
            <Route path="/cats/shop" element={<ShopCatFood />} />
            <Route path="/cats/new" element={<CreateCat/>}/>
            <Route path="/cats/:id" element={<CatDetail/>}/>
            <Route path="/cats/:id/edit" element={<EditCat/>}/>
          </Routes>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}

export default App;
