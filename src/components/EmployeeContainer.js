import React, { Component } from "react"
import Container from "./Container";
import Header from "./Header";
import Table from "./Table"
import API from "../utils/API"


class EmployeeContainer extends Component {

    state = {
        result: [],
        search: ""
      };

      componentDidMount(){
        this.peoplePopulate()
      };

      peoplePopulate = () => {
        API.getUsers()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
      };

      searchPeople = query => {
            let fiteredPeople = this.state.result.filter(person => person.name.first.includes(query)||person.name.last.includes(query))
            this.setState({result:fiteredPeople})
      };

      handleInputChange  = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        this.searchPeople(this.state.search)
      };


      
    render(){
       let people;
        people = this.state.result.map(person=>
        <Table 
            key = {person.id.value}
            firstname ={person.name.first} 
            lastname= {person.name.last} 
            pic={person.picture.large} 
            phone={person.phone} 
            email={person.email}
            birth={person.dob.date} 
        />)
        return(
            <>
            <Header
            reset = {this.peoplePopulate}
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
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