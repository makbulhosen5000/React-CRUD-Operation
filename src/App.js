import * as React from "react";
import css from './App.css';
import * as ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./components/use-context/UserContext";
import Create from "./components/create/Create";
import Edit from "./components/edit/Edit";
import Delete from "./components/delete/Delete";
import View from "./components/view/View";
import Home from "./components/home/Home";




function App() {
  return (
    <div className="app">
      <UserProvider>
      <Routes>
          <Route path="/create" element={<Create/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/delete/:id" element={<Delete/>} />
          <Route path="/view/:id"  element={<View/>} />
          <Route path="/" element={<Home/>} />
      </Routes>
      </UserProvider>
        
    </div>
  );
}

export default App;
