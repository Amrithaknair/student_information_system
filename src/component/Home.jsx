import React from 'react';
//import ReactDOM from 'react-dom';
import {Tab,Tabs,AppBar} from '@material-ui/core';
import Givedata from './Givedata';
import Getdata from './Getdata';

//import New from './New';
const Home =()=>
{
    const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
    return (
        
        <>
        <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
    <Tab label="REGISTER" />
    <Tab label="VIEW STUDENT"/>
    
  </Tabs>
  </AppBar>
  {selectedTab===0 && <Givedata />}
  {selectedTab===1 && <Getdata />}
  
 
</>

    );

};
export default Home;