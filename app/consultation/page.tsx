"use client"

import Link from "next/link"

export default function Consultation(){

return(

<main className="page">


{/* NAVIGATION */}

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

<h1>Book a Consultation</h1>

<p>
If you or a loved one is going through cancer treatment,
our team is here to support you with compassionate
oncology nutrition guidance.
</p>

</section>



{/* FORM */}

<section className="formSection">

<form className="form">


<input placeholder="Full Name" required />


<div className="phoneRow">

<select>
<option>+91</option>
<option>+1</option>
<option>+44</option>
<option>+61</option>
<option>+971</option>
</select>

<input placeholder="Phone Number" type="tel" required />

</div>


<input placeholder="Email Address" type="email" required />


<select>

<option>Select Cancer Type</option>
<option>Breast Cancer</option>
<option>Lung Cancer</option>
<option>Colon Cancer</option>
<option>Blood Cancer</option>
<option>Other</option>

</select>


<input placeholder="Cancer Stage (if known)" />


<input placeholder="Doctor Name" />


<input placeholder="Hospital Name" />


<input placeholder="City" />


<input type="date" />


<select>

<option>Select Time Slot</option>
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



<button className="bookBtn">Request Consultation</button>


<p className="note">

We understand that this journey can feel overwhelming.
Our team respects your time and space, and we promise
we will never spam you with calls.

</p>

</form>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise is committed to supporting cancer patients
through compassionate oncology nutrition care.
</p>

</footer>



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/918320867088" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"/>
</a>

<a href="https://www.linkedin.com/company/nutriwise26/" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"/>
</a>

<a href="https://www.youtube.com/@NutriWise_26" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"/>
</a>

<a href="https://x.com/NutriWise26" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"/>
</a>

<a href="mailto:join.nutriwise@outlook.com" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"/>
</a>

</div>



<style jsx>{`

.page{
font-family:Poppins;
padding:40px;

background:linear-gradient(
180deg,
#fff7fb,
#f3ecff,
#efe8ff,
#fdf4ff
);

color:#4a3ca6;
}



.nav{
display:flex;
justify-content:space-between;
}

.links{
display:flex;
gap:25px;
flex-wrap:wrap;
}



.logoWrap{
display:flex;
justify-content:center;
margin:40px 0;
}

.logo{
width:260px;
}



.header{
text-align:center;
max-width:700px;
margin:auto;
margin-bottom:50px;
}



.formSection{
display:flex;
justify-content:center;
}



.form{
background:white;
padding:40px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
max-width:500px;
width:100%;

display:flex;
flex-direction:column;
gap:15px;
}



input, select{
padding:12px;
border-radius:8px;
border:1px solid #ddd;
font-size:14px;
}



.phoneRow{
display:flex;
gap:10px;
}



.phoneRow select{
width:30%;
}

.phoneRow input{
width:70%;
}



.bookBtn{
margin-top:10px;
background:#5e3ed6;
color:white;
padding:14px;
border:none;
border-radius:10px;
font-weight:600;
cursor:pointer;
}



.note{
font-size:13px;
text-align:center;
margin-top:10px;
opacity:0.8;
}



.footer{
margin-top:80px;
text-align:center;
padding:40px;

background:linear-gradient(
180deg,
#f3ecff,
#efe8ff
);
}

.lotus{
width:70px;
margin-bottom:10px;
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
background:linear-gradient(135deg,#7b5cff,#ff9bd2);
width:48px;
height:48px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
box-shadow:0 6px 20px rgba(120,90,255,0.35);
transition:0.3s;
}

.floaters a:hover{
transform:scale(1.1);
}

.floaters img{
width:20px;
height:20px;
filter:brightness(0) invert(1);
}



/* MOBILE */

@media(max-width:768px){

.page{
padding:20px;
}

.phoneRow{
flex-direction:column;
}

.phoneRow select,
.phoneRow input{
width:100%;
}

}

`}</style>

</main>

)

}
