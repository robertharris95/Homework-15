import React, { Component } from "react"
import Container from "./Container";
import Header from "./Header";
import Table from "./Table"

class EmployeeContainer extends Component {
    state = {
        result: {},
        search: ""
      };

    render(){
        return(
            <>
            <Header/>
            <Container>
                <Table 
                firstname ={this.state.result.results.name.first} 
                lastname= {this.state.result.results.name.last} 
                pic={this.state.result.results.picture.thumbnail} 
                phone={this.state.result.results.phone} 
                email={this.state.result.results.email}
                birth={this.state.result.results.dob.date} />
            </Container>
            </>
        )
    }
}

export default EmployeeContainer;