import React ,{useState}from "react";
import { useFormik } from "formik";
import './App.css';
import Popup from "./components/Popup";
const validate = values => {
  const errors = {};
    if(!values.firstname){
      errors.firstname="*REQUIRED";
    }else if(values.firstname.length > 8){
      errors.firstname = "MUST BE 8 CHARECTERS OR LESS";
    }
    if(!values.lastname){
      errors.lastname="*REQUIRED";
    }else if(values.lastname.length > 8){
      errors.lastname = "MUST BE 8 CHARECTERS OR LESS";
    }
    if(!values.email){
      errors.email = "*REQUIRED";
    }else if(! /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)){
      errors.email = "*INVALID EMAIL";
    }
    if(!values.password){
      errors.password = "*REQUIRED";
    }else if(values.password.length>8){
      errors.password="*MAXIMUM 8 CHARECTERS";
    }else if(values.password.length<4){
      errors.password="*MINIMUM 4 CHARECTERS";
    }
    if(!values.confirmpassword){
      errors.confirmpassword="*REQUIRED";
    }else if(values.password !== values.confirmpassword){
      errors.confirmpassword="*PASSWORD MUST MATCH"
    }
  return errors;
}
const App = () =>{
  const[bool ,setbool ] = useState(0);
  const formik = useFormik({
    initialValues:{
      firstname :'',
      lastname :'',
      email :'',
      password:'',
      confirmpassword:'',
    },
    validate,
    onSubmit:(value,{resetForm})=>{
      if(bool){
        setbool(0);
        resetForm({values:''});
      }else{
        setbool(1);
        console.log(value);
      }
    }
  });
  return( 
  <div className="main">
    <center>
    <div className="SignUp-form">
      <h2>Sign Up Here</h2>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" 
        placeholder="Firstname"
        name="firstname"
        autoComplete="off" 
        onChange={formik.handleChange}
        value={formik.values.firstname}
        onBlur={formik.handleBlur}/>
        {
            formik.touched.firstname && formik.errors.firstname ? <span>{
            formik.errors.firstname}</span>:null
        }
        <input type="text"
        placeholder="Lastname"
        name="lastname" 
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.lastname}
        onBlur={formik.handleBlur}/>
        {
          formik.touched.lastname && formik.errors.lastname ? <span>{
            formik.errors.lastname}</span>:null
        }
        <input type="text"
        placeholder="Email"
        name="email" 
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}/>
        {
            formik.touched.email && formik.errors.email ? <span>{
            formik.errors.email}</span>:null
        }
        <input type="password"
        placeholder="Password"
        name="password"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}/>
        {
            formik.touched.password && formik.errors.password ? <span>{
            formik.errors.password}</span>:null
        }
        <input type="password"
        placeholder="ConfirmPassword"
        name="confirmpassword" 
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.confirmpassword}
        onBlur={formik.handleBlur}/>
        {
            formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{
            formik.errors.confirmpassword}</span>:null
        }
        <input type="submit"value="Submit"/>
      </form>

    </div>
    </center>
    <div className="message-box">
      {
        bool ? (<Popup onClick = {formik.handleSubmit}/>):null
      }
    </div>
  </div>
  );
}

export default App;
