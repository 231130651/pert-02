import React from 'react'

import Login from "../components/Login";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./Dashboard/DashboardLayout";
import { User } from "./Dashboard/User";
import { Post } from "./Dashboard/Post";
import NotFound from "./Dashboard/NotFound";

export const M05App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard/" element={<DashboardLayout />}>
                <Route path="user" element={<User />}></Route>
                <Route path="post" element={<Post />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
 );
};
