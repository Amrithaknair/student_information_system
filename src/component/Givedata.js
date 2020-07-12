import React from 'react';

import '../App.css';

import axios from 'axios'
class Givedata extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {name:'',
                        dob:'',
                        stclass:'',
                        division:'',
                        gender:'',
                       
                      };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     
       
     }
     handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        console.log(name);
        console.log(value);
        this.setState({
           [name]: value
        });
     }
    
     handleSubmit=event =>{
        event.preventDefault();
        const user={
          
            name:this.state.name,
            dob:this.state.dob,
            stclass:this.state.stclass,
            division:this.state.division,
            gender:this.state.gender,
        
        };
        console.log(user);
   
    axios.put('http://localhost:8095/rest/users/',user).then(res=>
    {
        console.log(res);
        console.log(res.data);
        alert(res.data);
    });
 };
render()
{
  return (
    <div className="App"> <div className="divv">
         <form onSubmit= {this.handleSubmit}>
      <body></body>
 
    
 
  <center>  <h1> Student Registration Form</h1> </center>

  <label> Student Name </label> 
<input type="text" placeholder= "Student Name" size="15" name="name" pattern="[A-Za-z\s]" value={this.state.name} onChange={this.handleChange} required /> 
<label> Date Of Birth</label> 
<input type="date" placeholder= "DD/MM/YY" size="15" name="dob" value={this.state.dob} onChange={this.handleChange} required /> 

<label> 
Class :
</label> 

<select  className="ss" name="stclass" value={this.state.stclass} onChange={this.handleChange} required >
<option value="">Choose Class</option>
<option value="I">I</option>
<option value="II">II</option>
<option value="	III">III</option>
<option value="	IV">IV</option>
<option value="	V">V</option>
<option value="	VI">VI</option>
<option value="VII">VII</option>
<option value="	VIII">VIII</option>
<option value="	IX">IX</option>
<option value="X">X</option>
<option value="XI">XI</option>
<option value="XII">XII</option>
</select>

<label> 
Division :
</label> 

<select className="ss" name="division" value={this.state.division} onChange={this.handleChange} required >
<option value="">Choose Division</option>
<option value="A">A</option>
<option value="B">B</option>
<option value="	C">C</option>

</select>


<label> 
Gender :
</label><br/>
<label>Male</label><input type="radio" name="gender"  value="Male" onChange={this.handleChange}  required /> 
<label>Female</label> <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> 
<label>other</label> <input type="radio" name="gender" value="Other" onChange={this.handleChange} /> 

<br/><br/>
<button type="submit" class="btn success">SUBMIT</button>
   
 
  

  </form>
 </div>
</div>
)}

}
export default Givedata ;
