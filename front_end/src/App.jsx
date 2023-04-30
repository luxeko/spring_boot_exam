import React, {useState} from 'react'
import './App.css'
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Employees from "./pages/Employees.jsx";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <BrowserRouter>
                <Routes>
                    <Route path={`/`}>
                        <Route path={`/`} index element={<Employees/>}/>
                        <Route path={`/employees`} element={<Employees/>}/>
                        <Route path={`/employees/create`} element={<CreateEmployee/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
