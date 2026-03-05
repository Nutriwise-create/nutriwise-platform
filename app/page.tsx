"use client"

import Image from "next/image"
import { FaHeart, FaLeaf, FaHandsHelping } from "react-icons/fa"
import { MdHealthAndSafety } from "react-icons/md"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function Home(){

const testimonials=[
{
name:"Priya Mehta",
city:"Mumbai",
image:"/patients/patient1.jpg",
text:"Nutrition guidance helped me regain strength during chemotherapy."
},
{
name:"Ramesh Shah",
city:"Delhi",
image:"/patients/patient2.jpg",
text:"Nutrition support helped me maintain energy levels during treatment."
},
{
name:"Anjali Iyer",
city:"Chennai",
image:"/patients/patient3.jpg",
text:"Dietary support helped me tolerate treatment better."
},
{
name:"Arjun Nair",
city:"Bangalore",
image:"/patients/patient4.jpg",
text:"Nutrition guidance supported my recovery journey."
}
]

return(

<main className="page">

{/* NAVBAR */}

<nav className="nav">
<a>About Us</a>
<a>Our Nutritionists</a>
<a>Stories of Strength</a>
<a>Book Consultation</a>
<a>Login</a>
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
Compassionate oncology nutrition guidance designed to support strength,
healing and dignity throughout the cancer journey.
</p>

</section>


{/* WHY NUTRITION */}

<section className="section">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places enormous stress on the body. Chemotherapy,
radiation therapy and surgery often cause fatigue, appetite loss,
digestive discomfort and muscle weakness.
</p>

<p>
Balanced oncology nutrition helps support immune function, maintain
strength and improve treatment tolerance. NutriWise supports patients
with compassionate, evidence-based nutritional guidance.
</p>

</section>


{/* WHAT WE PROVIDE */}

<section className="section">

<h2>What We Provide</h2>

<div className="cards">

<div className="card">
<FaLeaf size={40}/>
<h3>Personalized Oncology Nutrition</h3>
<p>Nutrition plans tailored to cancer type and treatment stage.</p>
</div>

<div className="card">
<MdHealthAndSafety size={40}/>
<h3>Managing Treatment Side Effects</h3>
<p>Guidance for nausea, fatigue and appetite loss.</p>
</div>

<div className="card">
<FaHandsHelping size={40}/>
<h3>Continuous Nutrition Support</h3>
<p>Compassionate support throughout treatment.</p>
</div>

</div>

</section>


{/* PATIENT EXPERIENCES */}

<section className="section">

<h2>Patient Experiences</h2>

<div className="carousel">

<div className="track">

{testimonials.map((t,i)=>(
<div className="testimonial" key={i}>

<Image
src={t.image}
alt="patient"
width={70}
height={70}
/>

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

{testimonials.map((t,i)=>(
<div className="testimonial" key={"copy"+i}>

<Image
src={t.image}
alt="patient"
width={70}
height={70}
/>

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

</div>

</div>

</section>


{/* SUPPORT PATIENT */}

<section className="support">

<h2>

<FaHeart style={{marginRight:"10px"}}/>

Support a Patient

</h2>

<p>
Your support helps provide oncology nutrition guidance to patients who
may otherwise struggle to access support.
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
alt="Lotus"
width={90}
height={90}
/>

<p className="tagline">

NutriWise – Supporting patients with compassionate oncology nutrition guidance

</p>

<div className="policies">

<a>Privacy Policy</a>
<a>Refund Policy</a>
<a>Legal Disclaimer</a>

</div>

</footer>


{/* SOCIAL FLOATERS */}

<div className="floater">

<a href="https://wa.me/918320867088" target="_blank">
<FaWhatsapp/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank">
<FaInstagram/>
</a>

<a href="https://linkedin.com/company/nutriwise26" target="_blank">
<FaLinkedin/>
</a>

<a href="https://youtube.com/@NutriWise_26" target="_blank">
<FaYoutube/>
</a>

<a href="https://x.com/NutriWise26" target="_blank">
<FaXTwitter/>
</a>

<a href="mailto:join.nutriwise@outlook.com">
<MdEmail/>
</a>

</div>


<style jsx>{`

.page{
font-family:Poppins;
padding:40px;
color:#333;

background:
radial-gradient(circle at 20% 20%, #ffd6f0, transparent 40%),
radial-gradient(circle at 80% 80%, #d8c6ff, transparent 40%),
linear-gradient(180deg,#f8edff,#ffeaf4);
}

.nav{
display:flex;
justify-content:flex-end;
gap:30px;
font-weight:500;
}

.logoWrap{
display:flex;
justify-content:center;
margin:50px 0 20px;
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
box-shadow:0 10px 25px rgba(0,0,0,0.08);
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

.support{
text-align:center;
margin:80px auto;
}

.supportBtn{
background:#c79cff;
border:none;
padding:14px 30px;
border-radius:30px;
color:white;
font-weight:600;
cursor:pointer;
}

.footer{
text-align:center;
margin-top:60px;
}

.policies{
margin-top:20px;
display:flex;
justify-content:center;
gap:20px;
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
background:white;
padding:12px;
border-radius:50%;
box-shadow:0 5px 15px rgba(0,0,0,0.15);
}

`}</style>

</main>

)
}
