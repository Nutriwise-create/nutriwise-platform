"use client"

import Link from "next/link"
import { useState } from "react"

export default function Nutritionists(){

const [policy,setPolicy]=useState("")

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



{/* PAGE HEADER */}

<section className="header">

<h1>Our Nutritionists</h1>

<p>
Our team of oncology nutrition specialists is committed
to supporting patients with compassionate, evidence-based
nutritional guidance throughout their treatment journey.
</p>

</section>



{/* TEAM GRID */}

<section className="team">

<div className="card">

<img src="https://randomuser.me/api/portraits/women/44.jpg"/>

<h3>Dr. Ananya Mehta</h3>

<p className="title">Oncology Nutrition Specialist</p>

<p>
Dr. Ananya has spent years guiding cancer patients through
nutrition strategies that support strength and resilience
during treatment and recovery.
</p>

</div>



<div className="card">

<img src="https://randomuser.me/api/portraits/men/32.jpg"/>

<h3>Rohit Kapoor</h3>

<p className="title">Clinical Nutritionist</p>

<p>
Rohit focuses on helping patients maintain energy and
nutritional balance during chemotherapy and radiation therapy.
</p>

</div>



<div className="card">

<img src="https://randomuser.me/api/portraits/women/65.jpg"/>

<h3>Dr. Sneha Joshi</h3>

<p className="title">Oncology Diet Specialist</p>

<p>
Sneha believes personalized nutrition can help patients
navigate treatment side effects and improve recovery outcomes.
</p>

</div>



<div className="card">

<img src="https://randomuser.me/api/portraits/men/48.jpg"/>

<h3>Arjun Patel</h3>

<p className="title">Clinical Diet Consultant</p>

<p>
Arjun works closely with patients to develop practical,
sustainable nutrition plans during treatment.
</p>

</div>



<div className="card">

<img src="https://randomuser.me/api/portraits/women/29.jpg"/>

<h3>Dr. Kavya Sharma</h3>

<p className="title">Oncology Nutrition Expert</p>

<p>
Kavya focuses on strengthening immunity and recovery
through carefully structured nutritional support.
</p>

</div>

</section>



{/* JOIN NUTRITIONIST */}

<section className="join">

<h2>Join as Nutritionist</h2>

<p>
If you are passionate about supporting cancer patients through
scientific nutrition guidance and compassionate care,
we welcome you to join the NutriWise network.
</p>

<button
className="joinBtn"
onClick={()=>setPolicy("join")}
>
Join Us Nutritionist
</button>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<div className="policies">

<button onClick={()=>setPolicy("privacy")}>Privacy Policy</button>
<button onClick={()=>setPolicy("refund")}>Refund Policy</button>
<button onClick={()=>setPolicy("legal")}>Legal Disclaimer</button>

</div>

<p>
NutriWise is committed to supporting cancer patients
through compassionate oncology nutrition guidance.
</p>

</footer>



{/* POLICY POPUPS */}

{policy && (

<div className="popup">

<div className="popupBox">

<button className="close" onClick={()=>setPolicy("")}>✕</button>



{policy==="join" && (

<div>

<h3>Join NutriWise as a Nutritionist</h3>

<p>
We are always looking for passionate nutrition professionals
who want to support cancer patients through evidence-based care.
</p>

<p>
Send your resume to:
<br/>
<b>join.nutriwise@outlook.com</b>
</p>

</div>

)}



{policy==="privacy" && (

<p>
NutriWise respects and protects the privacy of all individuals
who interact with our platform. Any personal information shared
with NutriWise including name, contact details, medical
information or consultation requests is used strictly for the
purpose of providing nutritional consultation and support
services.

NutriWise does not sell, rent or distribute personal data to
third parties. Information may only be used internally for
consultation coordination, service improvement or compliance
with applicable regulations.

All reasonable security measures are implemented to protect
user data. By using this platform you consent to the collection
and use of information in accordance with this privacy policy.
</p>

)}



{policy==="refund" && (

<p>
NutriWise aims to provide transparent and fair service policies.

Refund requests may be considered if submitted within
10 calendar days from the date of payment, provided that
consultation services have not already been completed or
substantially delivered.

Refund requests will be reviewed by the NutriWise team to
prevent misuse of services. If consultation has already been
provided, scheduled sessions have been attended, or customized
nutrition plans have been delivered, refunds may not be
eligible.

Approved refunds will be processed through the original payment
method within a reasonable processing period.

NutriWise reserves the right to decline refund requests that do
not meet the stated conditions.
</p>

)}



{policy==="legal" && (

<p>
NutriWise provides evidence-based nutritional guidance intended
to support individuals undergoing cancer treatment or recovery.

The information and consultation services provided by NutriWise
are for supportive care purposes only and do not replace medical
diagnosis, treatment or professional advice provided by
oncologists, physicians or licensed healthcare providers.

Patients should always follow the guidance of their treating
medical professionals regarding treatment decisions.

NutriWise shall not be held liable for medical outcomes resulting
from the use or interpretation of nutritional guidance provided
through the platform.
</p>

)}

</div>

</div>

)}



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
background:linear-gradient(180deg,#fff7fb,#f3ecff,#efe8ff,#fdf4ff);
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
filter:drop-shadow(0 0 30px rgba(200,150,255,0.6));
}

.header{
text-align:center;
max-width:700px;
margin:auto;
margin-bottom:60px;
}

.team{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
max-width:1000px;
margin:auto;
justify-items:center;
}

.card{
background:white;
padding:25px;
border-radius:15px;
text-align:center;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.card img{
width:90px;
height:90px;
border-radius:50%;
margin-bottom:10px;
}

.title{
font-weight:600;
margin-bottom:10px;
}

.join{
text-align:center;
max-width:700px;
margin:80px auto;
}

.joinBtn{
background:#7b5cff;
color:white;
padding:14px 32px;
border:none;
border-radius:25px;
font-size:16px;
cursor:pointer;
margin-top:20px;
}

.footer{
margin-top:80px;
text-align:center;
padding:30px;
background:linear-gradient(180deg,#f3ecff,#efe8ff);
border-radius:20px;
}

.policies{
display:flex;
justify-content:center;
gap:15px;
margin-bottom:10px;
flex-wrap:wrap;
}

.policies button{
background:none;
border:none;
color:#4a3ca6;
font-size:14px;
cursor:pointer;
padding:6px 12px;
transition:0.3s;
}

.policies button:hover{
color:#7b5cff;
text-decoration:underline;
}

.lotus{
width:70px;
margin-bottom:10px;
}

.popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
}

.popupBox{
background:white;
padding:30px;
max-width:500px;
border-radius:10px;
}

.close{
float:right;
background:none;
border:none;
font-size:18px;
cursor:pointer;
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
}

.floaters img{
width:20px;
height:20px;
filter:brightness(0) invert(1);
}

@media(max-width:900px){
.team{
grid-template-columns:repeat(2,1fr);
}
}

@media(max-width:600px){
.team{
grid-template-columns:1fr;
}
}

`}</style>

</main>

)

}
