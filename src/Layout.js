import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <h2 className="sidebar-title">Sidebar</h2>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/">Home</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/about">About</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/contact">Contact</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/slides">Slides</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/faculties">Faculties</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/hook">Hook_Example</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/api">Hook_API_Demo</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/cal">Calculator</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/controllcomponents">Controll_Component_Example</Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/fac">Fac_Detail_list</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Header />

      <div className="row">
        <div className="col-md-9">
          <main>
            <Outlet />
          </main>
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>

      <div className="row">
        <div className="col border border-dark">
          <footer className="text-center py-3">
            <h1>CopyRight Ritesh Lakhani</h1>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Layout;
