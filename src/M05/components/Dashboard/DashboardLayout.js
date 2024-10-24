import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import "../styles/dashboard-style.css"


export const DashboardLayout = () => {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className='main-content'>
        <h2>Dashboard</h2>
        <Outlet />
      </div>
    </div>
  )
}
