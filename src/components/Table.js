import React from "react";
import Moment from "react-moment"
function Table(props) {
    return (
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={props.pic} alt={props.name}/></th>
      <td>{props.firstname} {props.lastname}</td>
      <td>{props.phone}</td>
      <td><a href={`mailto:${props.email}`}>{props.email}</a></td>
      <td><Moment format= "MM/DD/YYYY">{props.birth}</Moment></td>
    </tr>
  </tbody>
</table>
);
}

export default Table;