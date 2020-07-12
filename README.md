first we create front end of our system using reactjs
create an react app using the command create react-app app_name
Then it will create an app which contains the all the basic folders like App.js and index.js
then we create a folder called component
in the component folder create two files Givedata.js and Getdata.js
Givedata.js file is used for creating the form contains the field like name,class,date of birth,division gender
form validation is performed
after getting the forms data from the user clicking the submit button
After submiting the form the form values are stored to the mongodb database using the put method
back end we use spring boot and mongodb spring boot will accept these data and stored to the database
the spring boot folder is in inside the src folder containg the different packages called config,document,repository,resourse
these packages run in intellij 


first we run the spring boot application and getting the localhost address and write the address in react app
and react app having other file called Givedata

Giveda.js will get the information of students from the database and displayed to the system .

