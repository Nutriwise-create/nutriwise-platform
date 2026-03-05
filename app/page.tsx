"use client";

import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLeaf, FaHandsHelping } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

export default function Home() {

const [policy,setPolicy] = useState("");

const testimonials = [
{name:"Priya Mehta",city:"Mumbai",text:"Nutrition guidance helped me regain strength during chemotherapy."},
{name:"Ramesh Shah",city:"Delhi",text:"I maintained energy levels through treatment thanks to proper nutrition."},
{name:"Anjali Iyer",city:"Chennai",text:"Small dietary changes made treatment days easier."},
{name:"Arjun Nair",city:"Bangalore",text:"The support gave me clarity and strength."},
{name:"Kavita Desai",city:"Ahmedabad",text:"My recovery improved with proper nutrition planning."},
{name:"Neha Kapoor",city:"Delhi",text:"Simple food adjustments made a big difference."},
{name:"Sanjay Patel",city:"Surat",text:"I learned how nutrition supports healing."},
{name:"Ritu Sharma",city:"Jaipur",text:"Supportive and compassionate guidance."},
{name:"Manoj Verma",city:"Lucknow",text:"My strength improved gradually."},
{name:"Deepa Nair",city:"Kochi",text:"Helped me manage appetite loss."},
{name:"Rahul Gupta",city:"Indore",text:"Nutrition became a pillar of my recovery."},
{name:"Sneha Joshi",city:"Pune",text:"Clear and compassionate guidance."},
];

return(

<main className="page">

{/* NAVIGATION */}

<nav className="nav">

<a href="#">About Us</a>
<a href="#">Our Nutritionists</a>
<a href="#">Stories of Strength</a>
<a href="#">Book Consultation</a>
<a href="#">Login</a>

</nav>


{/* LOGO */}

<div className="logoSection">

<img src="/logo.png" className="logo"/>

</div>


{/* HERO */}

<section className="hero">

<h1>Medicine treats cancer, but nutrition strengthens your body</h1>

<p>
Compassionate oncology nutrition guidance supporting patients through strength,
healing and recovery during the cancer journey.
</p>

</section>


{/* WHY NUTRITION */}

<section className="section">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places immense stress on the body. Chemotherapy,
radiation therapy and surgeries often cause fatigue, nausea,
appetite loss and muscle weakness. Proper nutrition helps the body
maintain strength, preserve muscle mass and support the immune system.
</p>

<p>
Oncology nutrition helps patients tolerate treatment better,
recover faster and maintain quality of life during therapy.
NutriWise focuses on compassionate, evidence-based nutritional
guidance designed specifically for patients undergoing cancer treatment.
</p>

</section>


{/* WHAT WE PROVIDE */}

<section className="section">

<h2>What We Provide</h2>

<div className="cards">

<div className="card">

<FaLeaf size={45}/>
<h3>Personalized Oncology Nutrition</h3>
<p>Diet plans tailored to cancer type, treatment stage and individual needs.</p>

</div>

<div className="card">

<MdHealthAndSafety size={45}/>
<h3>Managing Treatment Side Effects</h3>
<p>Nutrition strategies for nausea, fatigue, appetite loss and recovery.</p>

</div>

<div className="card">

<FaHandsHelping size={45}/>
<h3>Continuous Support</h3>
<p>Ongoing guidance helping patients stay strong during treatment.</p>

</div>

</div>

</section>


{/* PATIENT EXPERIENCES */}

<section className="section">

<h2>Patient Experiences</h2>

<div className="slider">

{testimonials.map((t,i)=>(
<div key={i} className="testimonial">

<img src={`https://randomuser.me/api/portraits/${i%2===0?"women":"men"}/${30+i}.jpg`} />

<p>"{t.text}"</p>

<strong>{t.name}</strong>

<span>{t.city}</span>

</div>
))}

</div>

</section>


{/* SUPPORT PATIENT */}

<section className="section support">

<h2>Support a Patient</h2>

<p>
Cancer journeys can be overwhelming for many families.
Your support can help provide nutritional care to patients
who may otherwise struggle to access guidance.
</p>

<button className="supportBtn">Support Now</button>

<p className="counter">Patients Supported: 124</p>

</section>


{/* SOCIAL */}

<section className="section social">

<h2>You Can Find Us At</h2>

<div className="icons">

<a href="https://wa.me/918320867088" target="_blank"><FaWhatsapp/></a>

<a href="https://instagram.com/nutriwise_26" target="_blank"><FaInstagram/></a>

<a href="https://linkedin.com/company/nutriwise26" target="_blank"><FaLinkedin/></a>

<a href="https://youtube.com/@NutriWise_26" target="_blank"><FaYoutube/></a>

<a href="https://x.com/NutriWise26" target="_blank"><FaXTwitter/></a>

<a href="mailto:join.nutriwise@outlook.com"><MdEmail/></a>

</div>

</section>


{/* FOOTER */}

<footer className="footer">

<img src="/lotus.jpeg" className="lotus"/>

<div className="policies">

<button onClick={()=>setPolicy("privacy")}>Privacy Policy</button>

<button onClick={()=>setPolicy("refund")}>Refund Policy</button>

<button onClick={()=>setPolicy("legal")}>Legal Disclaimer</button>

</div>

</footer>


{/* POLICY POPUP */}

{policy && (

<div className="modal">

<div className="modalBox">

<button onClick={()=>setPolicy("")}>Close</button>

<p>

{policy==="privacy" && "We respect patient privacy and do not share personal health information."}

{policy==="refund" && "Consultation fees once paid are non refundable unless service is cancelled."}

{policy==="legal" && "NutriWise provides nutritional guidance and does not replace medical treatment."}

</p>

</div>

</div>

)}


{/* WHATSAPP FLOATER */}

<a href="https://wa.me/918320867088" target="_blank" className="whatsappFloat">

<FaWhatsapp/>

</a>


<style jsx>{`

.page{
background:linear-gradient(180deg,#f8edff,#fde2f3);
font-family:Poppins;
padding:40px;
}

.nav{
display:flex;
justify-content:flex-end;
gap:30px;
}

.logoSection{
text-align:center;
margin:30px 0;
}

.logo{
height:110px;
}

.hero{
text-align:center;
max-width:800px;
margin:auto;
}

.section{
max-width:1000px;
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
border-radius:15px;
box-shadow:0 10px 20px rgba(0,0,0,0.08);
text-align:center;
}

.slider{
display:flex;
gap:25px;
overflow-x:auto;
}

.testimonial{
min-width:250px;
background:white;
padding:20px;
border-radius:15px;
text-align:center;
}

.testimonial img{
width:70px;
height:70px;
border-radius:50%;
}

.support{
text-align:center;
}

.supportBtn{
background:#c79cff;
padding:14px 28px;
border:none;
border-radius:25px;
color:white;
font-weight:600;
cursor:pointer;
}

.icons{
display:flex;
justify-content:center;
gap:25px;
font-size:30px;
}

.footer{
text-align:center;
margin-top:60px;
}

.lotus{
height:60px;
}

.policies button{
margin:10px;
}

.whatsappFloat{
position:fixed;
bottom:30px;
right:30px;
background:#25D366;
color:white;
padding:15px;
border-radius:50%;
font-size:28px;
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
padding:40px;
border-radius:15px;
max-width:500px;
}

`}</style>

</main>

);

}
