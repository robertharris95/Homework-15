import React, { Component } from "react"
import Container from "./Container";
import Header from "./Header";
import Table from "./Table"
import API from "../utils/API"

class EmployeeContainer extends Component {

    state = {
        result: {},
        search: ""
      };

      componentDidMount(){
        this.peoplePopulate()
      };

      peoplePopulate = () => {
        API.getUsers()
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

    //   searchPeople = query => {
    //     API.search(query)
    //       .then(res => this.setState({ result: res.data }))
    //       .catch(err => console.log(err));
    //   };

      handleInputChange  = event =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event =>{
        event.preventDefault();
        this.peoplePopulate(this.state.search)
        console.log(this.state.result)
      }
      
    render(){
        let people;
        people = this.state.result.results.map(person=>
        <Table 
            firstname ={person.name.first} 
            lastname= {person.name.last} 
            pic={person.picture.thumbnail} 
            phone={person.phone} 
            email={person.email}
            birth={person.dob.date} 
        />)
        return(
            <>
            <Header/>
            <br/>
            <br/>
            <Container>
                {people}
            </Container>
            </>
        )
    }
}

export default EmployeeContainer;