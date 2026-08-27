import "./App.css";
import { Login } from "../login/login";
import {BrowserRouter, Routes, Route, redirect} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" action={redirect("/login")} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
