import { useState } from "react";
import { Link } from "react-router-dom";



const Navber = () => {
  const [add, setAdd] = useState(0)

  const heandleAdd =() =>{
    setAdd(heandleAdd)
    add =add +1;

  }
    return (
        <div className="">
      <div className="navbar bg-base-100  container">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <Link to='/'>Home</Link>
      <Link to='/statistics'>Statistics</Link>
      <Link to='/dashboard'>Dashboard</Link>
      </ul>
    </div>
    <Link to="/" className="text-xl">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-8">
      <Link to='/'>Home</Link>
      <Link to='/statistics'>Statistics</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/about'>Contact</Link>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{add}</span>
        </div>

  </div>
</div>
        </div>
    );
};

export default Navber;