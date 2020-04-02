import React from "react";


const navStyle ={
    backgroundColor: "#000080"
}
function Header(props) {
  return (
<div className="navbar navbar-dark" style={navStyle}>
  <div className="navbar-brand">Employee Tracker</div>
  <form className="form-inline">
    <input 
      className="form-control mr-sm-4" 
      type="search" 
      placeholder="Search" 
      onChange={props.handleInputChange} 
      value={props.search}
      name="search"
    />

    <button 
      className="btn btn-light my-2 my-sm-0" 
      onClick={props.handleFormSubmit}
    >
      Search
    </button>
    <button 
      className="btn btn-light  ml-sm-4 my-2 my-sm-0" 
      onClick={props.peoplePopulate}
    >
      Reset
    </button>
  </form>
</div>
  );
}

export default Header;