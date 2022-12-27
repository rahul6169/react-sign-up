const Signup=()=>{
  const onChange = (e)=>{
    console.log(e.target.value)
  }
  return(
<form id="newBusiness">
<h2>New Business</h2>
<div><label>User Name </label>
<input type="text" id="userName" onChange={onChange} placeholder="Enter Your Name"></input></div>
<label>Email </label>
<input type="email" id="email" placeholder="Enter Your Email"></input>
<br></br>
<label>Phone Number</label>
<input type="tel" id="phoneNumber" minLength={5} maxLength={10} placeholder="Enter Your Number"></input>
<br></br>
<label>Contact Name </label>
<input type="text" id="contactName" onChange={onChange} placeholder="Enter Your Name"></input>
<br></br>
<label>Email </label>
<input type="email" id="contactEmail" placeholder="Enter Contact Email"></input>
<br></br>
<label>Phone Number</label>
<input type="tel" id="contactPhoneNumber" minLength={5} maxLength={10} placeholder="Enter Contact Number"></input>
<br></br>
<label >Type
        <label for ="smallBusiness">
        <input type="radio"id="smallBusiness" value="Small Business" name="typeOfBusiness" /> Small Business</label><br></br>
        <input type="radio" id="enterprise"value="Enterprise" name="typeOfBusiness" /> Enterprise<br></br>
        <input type="radio" id="entrepreneur"value="Entrepreneur" name="typeOfBusiness" /> Entrepreneur
        </label>
</form>
  
);
  
  
}
export default Signup;