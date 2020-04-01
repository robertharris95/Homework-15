import React from "react";

const navStyle ={
    backgroundColor: "#000080"
}
function Header() {
  return (
<div className="navbar navbar-dark" style={navStyle}>
  <a className="navbar-brand" href="#">Employee Tracker</a>
  <form className="form-inline">
    <input className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
  );
}

export default Header;