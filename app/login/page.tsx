"use client"

import { useState } from "react"
import Link from "next/link"

export default function Login(){

const [form,setForm]=useState({
email:"",
password:""
})

function handleChange(e:any){
setForm({
...form,
[e.target.name]:e.target.value
})
}

function handleSubmit(e:any){
e.preventDefault()

if(!form.email || !form.password){
alert("Please enter email and password")
return
}

alert("Login successful")

console.log(form)
}

return(

<main className="page">


{/* NAVBAR */}

<nav className="nav">

<div></div>

<div className="links">
<Link href="/">Home</Link>
<Link href="/about">About Us</Link>
<Link href="/nutritionists">Our Nutritionists</Link>
<Link href="/stories">Stories of Strength</Link>
<Link href="/consultation">Book Consultation</Link>
<Link href="/login">Login</Link>
</div>

</nav>



{/* LOGO */}

<div className="logoWrap">
<img src="/Logo.png" className="logo"/>
</div>



{/* HEADER */}

<section className="header">

<h1>Welcome Back</h1>

<p>
Your health journey deserves support, understanding and care.
Log in to continue your journey with NutriWise and connect with
our oncology nutrition experts who are here to guide you
with compassion every step of the way.
</p>

</section>



{/* LOGIN FORM */}

<section className="formSection">

<form onSubmit={handleSubmit} className="form">

<input
name="email"
type="email"
placeholder="Email Address"
required
onChange={handleChange}
/>

<input
name="password"
type="password"
placeholder="Password"
required
onChange={handleChange}
/>

<button type="submit">
Login
</button>


<p className="signup">

Don't have an account?

<Link href="/signup"> Sign Up</Link>

</p>

</form>

</section>



{/* LOTUS IMAGE */}

<div className="lotusWrap">
<img src="/lotus.png" className="lotus"/>
</div>



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/918320867088" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733558.png"/>
</a>

<a href="https://linkedin.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733561.png"/>
</a>

<a href="https://youtube.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733646.png"/>
</a>

<a href="https://x.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"/>
</a>

<a href="mailto:join.nutriwise@outlook.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/>
</a>

</div>



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
font-weight:500;
}

.logoWrap{
display:flex;
justify-content:center;
margin-bottom:30px;
}

.logo{
width:280px;
filter:drop-shadow(0 0 25px rgba(180,120,255,0.5));
}

.header{
text-align:center;
max-width:700px;
margin:auto;
margin-bottom:40px;
}

.formSection{
max-width:500px;
margin:auto;
}

.form{
display:flex;
flex-direction:column;
gap:16px;
}

input{
padding:12px;
border-radius:10px;
border:1px solid #ddd;
font-size:14px;
}

button{
background:#6d4df5;
color:white;
padding:14px;
border:none;
border-radius:20px;
cursor:pointer;
font-weight:500;
margin-top:10px;
}

.signup{
text-align:center;
font-size:14px;
}

.signup a{
margin-left:6px;
color:#6d4df5;
font-weight:600;
}

.lotusWrap{
display:flex;
justify-content:center;
margin-top:60px;
}

.lotus{
width:120px;
opacity:0.8;
}

.floaters{
position:fixed;
right:20px;
top:40%;
display:flex;
flex-direction:column;
gap:16px;
}

.floaters a{
background:#5e3ed6;
width:46px;
height:46px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
}

.floaters img{
width:22px;
height:22px;
filter:brightness(0) invert(1);
}

`}</style>

</main>

)

}
