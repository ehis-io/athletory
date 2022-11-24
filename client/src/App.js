import React from "react";
import Footer from "./component/footer/footer";
import TopBar from "./component/TopBar/topBar";
import Home from "./component/Pages/home/home";
import Single from "./component/Pages/single/single";
import Write from "./component/Pages/write/write";
import Login from "./component/Pages/login/Login";
import Register from "./component/Pages/register/Register";
import Settings from "./component/Pages/settings/Settings";
import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "./component/post/posts/posts";

//const auth_key =JSON.stringify(localStorage.getItem('access_token'))


function App (user){
    //console.log(auth_key)
    
    if (user) {
        var currentUser = true
        console.log('Logged in')
    } else
    {
        var currentUser = false
        console.log('please log in')
    }

    return (
        <>
            <TopBar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                
                <Route path="login" element={ <Login /> } /> 
                
                <Route path="register" element={ <Register /> } />
                
                <Route
                    path="write"
                    element={
                        currentUser ? (
                            <Write />
                        ) : (
                            <Navigate replace to={"/login"} />
                        )
                    }
                />

                
                <Route
                    path="login"
                    elememt={
                        !currentUser ? <Login /> : <Navigate replace to={"/"} />
                    }
                />


                <Route
                    path="post/:id"
                    element={
                        currentUser ?(
                            <Single /> 
                        ) : (<Navigate replace to={ "/login" } />
                        )
                    } />
                
                <Route
                    path="/post"
                    element={
                        currentUser ? (
                            <Posts />
                        ) : (
                            <Navigate replace to={"/login"} />
                        )
                    }
                />

                <Route
                    path="/settings"
                    element={
                        currentUser ? (
                            <Settings />
                        ) : (
                            <Navigate replace to={"/login"} />
                        )
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
