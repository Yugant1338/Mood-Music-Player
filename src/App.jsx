import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Callback from "./components/Callback";
import MoodFormPage from "./components/MoodFormPage";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Callback />} />
                <Route path ="/mood-form" element = {<MoodFormPage />} />
            </Routes>
        </Router>
    );
};

export default App;
