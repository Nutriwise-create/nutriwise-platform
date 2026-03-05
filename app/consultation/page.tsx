"use client"

import { useState } from "react"
import Link from "next/link"

export default function Consultation(){

const [form,setForm]=useState({
name:"",
age:"",
gender:"",
email:"",
countryCode:"+91",
phone:"",
cancerType:"",
doctor:"",
hospital:"",
date:"",
time:""
})

function handleChange(e){
setForm({
...form,
[e.target.name]:e.target.value
})
}

function handleSubmit(e){
e.preventDefault()

if(form.phone.length < 8){
alert("Please enter a valid phone number")
return
}

alert("Consultation request submitted successfully")

console.log(form)
}

return(

<main className="page">

<nav className="nav">

<div></div>

<div className="links">
<Link href="/">Home</Link>
<Link href="/about">About Us</Link>
<Link href="/nutritionists">Our Nutritionists</Link>
<Link href="/stories">Stories of Strength</Link>
<Link href="/consultation">Book Consultation</Link>
</div>

</nav>



<div className="logoWrap">
<img src="/Logo.png" className="logo"/>
</div>



<section className="formSection">

<h1>Book a Consultation</h1>

<p>
Speak with our oncology nutrition experts and receive
personalized guidance for your journey.
</p>

<form onSubmit={handleSubmit} className="form">

<input
name="name"
placeholder="Full Name"
required
onChange={handleChange}
/>

<input
name="age"
type="number"
placeholder="Age"
required
onChange={handleChange}
/>

<select name="gender" required onChange={handleChange}>
<option value="">Gender</option>
<option>Male</option>
<option>Female</option>
<option>Prefer not to say</option>
</select>


<input
name="email"
type="email"
placeholder="Email Address"
required
onChange={handleChange}
/>


<div className="phone">

<select name="countryCode" onChange={handleChange}>

<option value="+91">🇮🇳 +91</option>
<option value="+1">🇺🇸 +1</option>
<option value="+44">🇬🇧 +44</option>
<option value="+61">🇦🇺 +61</option>

</select>

<input
name="phone"
placeholder="Phone Number"
required
onChange={handleChange}
/>

</div>


<p className="note">
Your information remains private and is only used to schedule
your consultation. We respect your time and will only reach out
regarding your request.
</p>


<select name="cancerType" required onChange={handleChange}>

<option value="">Select Cancer Type</option>
<option>Breast Cancer</option>
<option>Lung Cancer</option>
<option>Colon Cancer</option>
<option>Leukemia</option>
<option>Lymphoma</option>
<option>Prostate Cancer</option>
<option>Ovarian Cancer</option>
<option>Pancreatic Cancer</option>
<option>Other</option>

</select>


<input
name="doctor"
placeholder="Doctor Name (optional)"
onChange={handleChange}
/>

<input
name="hospital"
placeholder="Hospital Name (optional)"
onChange={handleChange}
/>


<input
type="date"
name="date"
required
onChange={handleChange}
/>


<select name="time" required onChange={handleChange}>

<option value="">Select Time Slot</option>

<option>09:00 AM</option>
<option>09:30 AM</option>
<option>10:00 AM</option>
<option>10:30 AM</option>
<option>11:00 AM</option>
<option>11:30 AM</option>
<option>12:00 PM</option>
<option>12:30 PM</option>
<option>01:00 PM</option>
<option>01:30 PM</option>
<option>02:00 PM</option>
<option>02:30 PM</option>
<option>03:00 PM</option>
<option>03:30 PM</option>
<option>04:00 PM</option>
<option>04:30 PM</option>
<option>05:00 PM</option>
<option>05:30 PM</option>
<option>06:00 PM</option>
<option>06:30 PM</option>
<option>07:00 PM</option>
<option>07:30 PM</option>
<option>08:00 PM</option>
<option>08:30 PM</option>
<option>09:00 PM</option>

</select>


<button type="submit">
Submit Consultation Request
</button>

</form>

</section>


<style jsx>{`

.page{
font-family:Poppins;
padding:40px;

background:linear-gradient(
180deg,
#fff7fb 0%,
#f3ecff 35%,
#efe8ff 65%,
#fdf4ff 100%
);

color:#4a3ca6;
}

.nav{
display:flex;
justify-content:space-between;
margin-bottom:20px;
}

.links{
display:flex;
gap:28px;
}

.logoWrap{
display:flex;
justify-content:center;
margin-bottom:40px;
}

.logo{
width:280px;
}

.formSection{
max-width:600px;
margin:auto;
text-align:center;
}

.form{
display:flex;
flex-direction:column;
gap:15px;
margin-top:30px;
}

input,select{
padding:12px;
border-radius:8px;
border:1px solid #ccc;
}

.phone{
display:flex;
gap:10px;
}

button{

background:#6d4df5;
color:white;

padding:12px;

border:none;

border-radius:20px;

cursor:pointer;

margin-top:10px;

}

.note{
font-size:13px;
color:#666;
text-align:left;
}

`}</style>

</main>

)

}
