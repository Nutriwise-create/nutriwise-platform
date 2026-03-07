"use client"

import Link from "next/link"
import { useState } from "react"

export default function Dashboard(){

const [showPopup,setShowPopup] = useState(false)

return(

<main className="page">


{/* NAVBAR */}

<nav className="nav">

<div></div>

<div className="links">
<Link href="/dashboard">Home</Link>
<Link href="/dashboard/profile">Profile</Link>
</div>

</nav>


{/* LOGO */}

<div className="logoWrap">
<img src="/Logo.png" className="logo"/>
</div>


{/* QUOTE */}

<section className="quote">

<p>
<strong><i>
"Even on difficult days your strength is quietly working within you.
Healing is not always visible — but it is happening."
</i></strong>
</p>

</section>


{/* CARE CUDDLE */}

<section className="tip">

<h3 className="careTitle">

<img
src="/mortar.png"
className="careImage"
alt="Care Cuddle"
/>

Care Cuddle

</h3>

<p>
A gentle nutrition nudge to support your body today.
Small nourishment choices often make the biggest difference.
</p>

</section>


{/* ANNOUNCEMENTS + ARTICLES */}

<section className="infoSection">

<div className="infoColumn">

<h3 className="infoTitle">Announcements</h3>

<div className="box">

<div className="scrollBox">

<p>Upcoming webinar on nutrition during chemotherapy</p>
<p>Online support group session this Sunday</p>
<p>Nutrition awareness event by cancer support NGO</p>
<p>Live Q&A with oncology nutrition expert</p>

</div>

</div>

</div>


<div className="infoColumn">

<h3 className="infoTitle">Helpful Articles</h3>

<div className="box">

<div className="scrollBox">

<p>Nutrition during chemotherapy</p>
<p>Managing appetite loss during treatment</p>
<p>Protein intake for recovery</p>
<p>Foods that support healing</p>

</div>

</div>

</div>

</section>


{/* NGO CONNECT */}

<section className="ngo">

<Link href="/dashboard/ngo">
<button>Click to Reach NGOs</button>
</Link>

</section>



{/* FEATURES GRID */}

<section className="features">

<div className="feature">

<h3>What You Should Eat Next</h3>

<p>
Personalized diet suggestions based on treatment stage,
nutritional needs and recovery support.
</p>

<p className="lockText" onClick={()=>setShowPopup(true)}>
🔒 Unlock with Nutrition Plan
</p>

</div>


<div className="feature">

<h3>Nutrition Counter</h3>

<p>
Track daily calories, hydration, protein intake and
important nutrients required for recovery.
</p>

<p className="lockText" onClick={()=>setShowPopup(true)}>
🔒 Unlock with Nutrition Plan
</p>

</div>


<div className="feature">

<h3>Today's Healing Recipe Idea</h3>

<p>
Carefully designed recipes that are easy to digest,
nutrient rich and supportive during treatment.
</p>

<p className="lockText" onClick={()=>setShowPopup(true)}>
🔒 Unlock with Nutrition Plan
</p>

</div>


<div className="feature">

<h3>Medicine Tracker</h3>

<p>
Track medicines, doses and schedules so treatment
remains organized and consistent.
</p>

<p className="lockText" onClick={()=>setShowPopup(true)}>
🔒 Unlock with Nutrition Plan
</p>

</div>

</section>



{/* MESSAGE NUTRITIONIST */}

<section className="nutritionist">

<p className="lockText" onClick={()=>setShowPopup(true)}>
🔒 Message Your Nutritionist
</p>

</section>



{/* POPUP */}

{showPopup && (

<div className="popupOverlay">

<div className="popupBox">

<p>This feature is part of the nutrition plan.</p>

<div className="popupButtons">

<Link href="/plans">
<button className="payBtn">Pay Now</button>
</Link>

<Link href="/book-consultation">
<button className="consultBtn">Book Consultation</button>
</Link>

</div>

<button
className="closePopup"
onClick={()=>setShowPopup(false)}
>
Close
</button>

</div>

</div>

)}



{/* LOTUS */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise is dedicated to supporting cancer patients
with compassionate nutritional guidance.
</p>

</footer>



{/* WHATSAPP FLOATER */}

<div className="floaters">

<a
href="https://wa.me/918320867088"
target="_blank"
rel="noopener noreferrer"
>

<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"/>

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
}

.logoWrap{
display:flex;
justify-content:center;
margin:30px 0;
}

.logo{
width:220px;
filter:drop-shadow(0 0 25px rgba(200,150,255,0.6));
}

.quote{
text-align:center;
max-width:650px;
margin:auto;
margin-bottom:40px;
font-size:18px;
}

.tip{
background:white;
padding:20px;
border-radius:15px;
max-width:650px;
margin:auto;
text-align:center;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.careTitle{
display:flex;
align-items:center;
justify-content:center;
gap:10px;
}

.careImage{
width:32px;
height:32px;
border-radius:50%;
background:white;
padding:4px;
box-shadow:0 3px 8px rgba(0,0,0,0.1);
object-fit:cover;
}

.infoSection{
display:flex;
gap:40px;
justify-content:center;
margin-top:50px;
flex-wrap:wrap;
}

.infoColumn{
width:300px;
}

.infoTitle{
margin-bottom:10px;
font-weight:600;
}

.box{
background:white;
padding:20px;
border-radius:15px;
height:120px;
overflow:hidden;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.scrollBox{
display:flex;
flex-direction:column;
gap:10px;
animation:autoScroll 12s linear infinite;
}

@keyframes autoScroll{
0%{transform:translateY(0)}
100%{transform:translateY(-50%)}
}

.ngo{
text-align:center;
margin-top:40px;
}

.ngo button{
background:#7b5cff;
color:white;
padding:12px 25px;
border:none;
border-radius:20px;
cursor:pointer;
}

.features{
margin-top:60px;
display:grid;
grid-template-columns:1fr 1fr;
gap:25px;
}

.feature{
background:white;
padding:25px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.lockText{
margin-top:10px;
font-size:14px;
opacity:0.8;
cursor:pointer;
}

.nutritionist{
text-align:center;
margin-top:50px;
}

.footer{
text-align:center;
margin-top:80px;
}

.lotus{
width:70px;
margin-bottom:10px;
}

.popupOverlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.35);
display:flex;
align-items:center;
justify-content:center;
z-index:1000;
}

.popupBox{
background:white;
padding:30px;
border-radius:20px;
text-align:center;
max-width:320px;
box-shadow:0 10px 30px rgba(0,0,0,0.15);
}

.popupButtons{
display:flex;
gap:15px;
justify-content:center;
margin-top:15px;
}

.payBtn{
background:#6d4df5;
color:white;
padding:10px 20px;
border:none;
border-radius:20px;
}

.consultBtn{
background:#7b5cff;
color:white;
padding:10px 20px;
border:none;
border-radius:20px;
}

.closePopup{
margin-top:15px;
background:none;
border:none;
color:#6d4df5;
cursor:pointer;
}

.floaters{
position:fixed;
right:20px;
bottom:30px;
z-index:999;
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

@media(max-width:768px){

.page{
padding:20px;
}

.logo{
width:180px;
}

.infoSection{
flex-direction:column;
align-items:center;
}

.features{
grid-template-columns:1fr;
}

}

`}</style>

</main>

)
}
