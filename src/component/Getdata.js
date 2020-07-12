import React from 'react';
import axios from 'axios'
import '../App.css';

class Getdata extends React.Component
{
    state={
        persons:[]
    };
    
    componentDidMount()
    {
   axios.get('http://localhost:8095/rest/users/all/').then(res =>{
   console.log(res);    
   this.setState({persons:res.data});
       
    
    });
   }
    render()
    {
       return(
       
         <body>
             <center>  <h2> Student Details</h2> </center>
           <table>
<tr>
    <th>Student Id</th>
<th>Studen Name</th>
<th>Student Date of Birth</th>
<th>Student Class</th>
<th>Student Division</th>
<th>Student Gender</th></tr>           

        {this.state.persons.map(person=>
        <tr key={person.id}>
        <td >{person.id}</td>
        <td>{person.name}</td>
        <td>{person.dob}</td>
        <td>{person.stclass}</td>
        <td>{person.division}</td>
        <td>{person.gender}</td></tr>)
        }
           
          
        
          
           </table>
        </body>
       
       )}
}
export default Getdata;
