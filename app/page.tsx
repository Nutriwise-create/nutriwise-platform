"use client"

import Image from "next/image"
import { useState } from "react"

import { FaLeaf, FaHandsHelping, FaHeart } from "react-icons/fa"
import { MdHealthAndSafety } from "react-icons/md"

import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function Home(){

const [policy,setPolicy]=useState("")

const testimonials=[

{
name:"Priya Mehta",
city:"Mumbai",
image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
text:"Nutrition guidance helped me regain strength during chemotherapy."
},

{
name:"Ramesh Shah",
city:"Delhi",
image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
text:"Nutrition support helped me maintain energy during treatment."
},

{
name:"Anjali Iyer",
city:"Chennai",
image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
text:"Dietary guidance helped me manage side effects during therapy."
},

{
name:"Arjun Nair",
city:"Bangalore",
image:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200",
text:"Nutrition support improved my recovery journey."
}

]

return(

<main className="page">

{/* NAV */}

<nav className="nav">

<div></div>

<div className="navLinks">

<a>About Us</a>
<a>Our Nutritionists</a>
<a>Stories of Strength</a>
<a>Book Consultation</a>
<a>Login</a>

</div>

</nav>


{/* LOGO */}

<div className="logoWrap">

<Image
src="/logo.png"
alt="NutriWise"
width={260}
height={260}
priority
/>

</div>


{/* HERO */}

<section className="hero">

<h1>
Medicine treats cancer, but nutrition strengthens your body
</h1>

<p>
Compassionate oncology nutrition guidance designed to support
strength, healing and dignity throughout the cancer journey.
</p>

</section>


{/* WHY */}

<section className="section">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places enormous stress on the body.
Chemotherapy, radiation therapy and surgery often cause
fatigue, appetite loss and digestive discomfort.
</p>

<p>
Balanced oncology nutrition supports immunity, strength
and recovery, helping patients tolerate treatment better.
</p>

</section>


{/* SERVICES */}

<section className="section">

<h2>What We Provide</h2>

<div className="cards">

<div className="card">
<FaLeaf size={35}/>
<h3>Personalized Oncology Nutrition</h3>
<p>Nutrition plans tailored to treatment stage and patient needs.</p>
</div>

<div className="card">
<MdHealthAndSafety size={35}/>
<h3>Managing Treatment Side Effects</h3>
<p>Support for fatigue, appetite loss and digestion.</p>
</div>

<div className="card">
<FaHandsHelping size={35}/>
<h3>Continuous Nutrition Support</h3>
<p>Compassionate guidance during treatment.</p>
</div>

</div>

</section>


{/* TESTIMONIALS */}

<section className="section">

<h2>Patient Experiences</h2>

<div className="carousel">

<div className="track">

{testimonials.map((t,i)=>(
<div className="testimonial" key={i}>

<img src={t.image} />

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

{testimonials.map((t,i)=>(
<div className="testimonial" key={"copy"+i}>

<img src={t.image} />

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

</div>

</div>

</section>


{/* SUPPORT */}

<section className="support">

<h2>

<FaHeart className="heart"/>

Support a Patient

<FaHeart className="heart"/>

</h2>

<p>
Your support helps provide oncology nutrition guidance
to patients who cannot access support.
</p>

<button className="supportBtn">
Support Now
</button>

<p className="counter">
Patients Supported: 124
</p>

</section>


{/* FOOTER */}

<footer className="footer">

<Image
src="/lotus.png"
alt="lotus"
width={110}
height={110}
/>

<p className="tagline">

NutriWise – Supporting patients with compassionate oncology nutrition guidance

</p>

<div className="policies">

<a onClick={()=>setPolicy("privacy")}>Privacy Policy</a>
<a onClick={()=>setPolicy("refund")}>Refund Policy</a>
<a onClick={()=>setPolicy("legal")}>Legal Disclaimer</a>

</div>

</footer>


{/* POLICY POPUP */}

{policy &&(

<div className="modal">

<div className="modalBox">

<button onClick={()=>setPolicy("")}>Close</button>

{policy==="privacy" &&(

<p>

NutriWise respects your privacy and collects only necessary
information to provide nutrition guidance and communication.

</p>

)}

{policy==="refund" &&(

<p>

Refunds are available if requested within **10 days of purchase**.

However refunds may not be granted if services have already
been substantially delivered, consultations completed,
or where misuse or repeated refund requests are detected.

NutriWise reserves the right to review refund eligibility
to prevent misuse of services.

</p>

)}

{policy==="legal" &&(

<p>

NutriWise provides nutritional guidance and educational support.
Our services do not replace diagnosis, treatment or medical
advice from licensed healthcare professionals.

</p>

)}

</div>

</div>

)}


{/* FLOATING ICONS */}

<div className="floater">

<a href="https://wa.me/918320867088"><FaWhatsapp/></a>
<a href="https://instagram.com/nutriwise_26"><FaInstagram/></a>
<a href="https://linkedin.com/company/nutriwise26"><FaLinkedin/></a>
<a href="https://youtube.com/@NutriWise_26"><FaYoutube/></a>
<a href="https://x.com/NutriWise26"><FaXTwitter/></a>
<a href="mailto:join.nutriwise@outlook.com"><MdEmail/></a>

</div>


<style jsx>{`

.page{
font-family:Poppins;
padding:40px;
background:linear-gradient(180deg,#f7efff,#d5c4ff,#b39cff);
color:#4e2fa5;
}

.nav{
display:flex;
justify-content:space-between;
align-items:center;
}

.navLinks{
display:flex;
gap:28px;
}

.logoWrap{
display:flex;
justify-content:center;
margin:40px 0;
}

.hero{
text-align:center;
max-width:800px;
margin:auto;
}

.section{
max-width:1100px;
margin:80px auto;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.card{
background:white;
padding:30px;
border-radius:20px;
text-align:center;
box-shadow:0 10px 25px rgba(0,0,0,0.1);
}

.carousel{
overflow:hidden;
}

.track{
display:flex;
gap:25px;
animation:scroll 30s linear infinite;
}

@keyframes scroll{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
}

.testimonial{
min-width:260px;
background:white;
padding:20px;
border-radius:18px;
text-align:center;
box-shadow:0 10px 20px rgba(0,0,0,0.08);
}

.testimonial img{
width:70px;
height:70px;
border-radius:50%;
object-fit:cover;
margin-bottom:10px;
}

.support{
text-align:center;
margin:80px auto;
}

.heart{
color:#7a49ff;
margin:0 10px;
}

.supportBtn{
background:#5e3bf1;
border:none;
padding:14px 30px;
border-radius:30px;
color:white;
font-weight:600;
cursor:pointer;
}

.footer{
text-align:center;
margin-top:80px;
}

.policies{
margin-top:20px;
display:flex;
justify-content:center;
gap:20px;
cursor:pointer;
}

.floater{
position:fixed;
right:20px;
top:40%;
display:flex;
flex-direction:column;
gap:15px;
font-size:26px;
}

.floater a{
color:#4e2fa5;
background:white;
padding:12px;
border-radius:50%;
box-shadow:0 5px 15px rgba(0,0,0,0.15);
}

.modal{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:center;
}

.modalBox{
background:white;
padding:30px;
border-radius:15px;
max-width:500px;
}

`}</style>

</main>

)

}
