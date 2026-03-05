"use client"

import Link from "next/link"
import { FaLeaf, FaHandsHelping, FaHeart } from "react-icons/fa"
import { MdHealthAndSafety } from "react-icons/md"

export default function Home() {

return (

<main className="page">


{/* NAVBAR */}

<nav className="nav">

<div></div>

<div className="navLinks">

<Link href="/about">About Us</Link>
<Link href="/nutritionists">Our Nutritionists</Link>
<Link href="/stories">Stories of Strength</Link>
<Link href="/consultation">Book Consultation</Link>
<Link href="/login">Login</Link>

</div>

</nav>



{/* LOGO */}

<div className="logoWrap">
<img src="/Logo.png" alt="NutriWise" className="logo"/>
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



{/* WHY NUTRITION */}

<section className="section">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places enormous stress on the body. Chemotherapy,
radiation therapy and surgery can cause fatigue, appetite loss and
digestive discomfort.
</p>

<p>
Balanced oncology nutrition helps maintain strength, support immunity
and improve recovery during treatment.
</p>

</section>



{/* SERVICES */}

<section className="section">

<h2>What We Provide</h2>

<div className="cards">

<div className="card">
<FaLeaf size={36}/>
<h3>Personalized Oncology Nutrition</h3>
<p>Nutrition plans tailored to cancer type and treatment stage.</p>
</div>

<div className="card">
<MdHealthAndSafety size={36}/>
<h3>Managing Treatment Side Effects</h3>
<p>Support for appetite loss, fatigue and digestive discomfort.</p>
</div>

<div className="card">
<FaHandsHelping size={36}/>
<h3>Continuous Nutrition Support</h3>
<p>Compassionate guidance throughout the healing journey.</p>
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
to patients who cannot access professional nutrition care.
</p>

<button className="supportBtn">
Support Now
</button>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise – Supporting patients with compassionate oncology nutrition guidance
</p>

<div className="policies">
<a>Privacy Policy</a>
<a>Refund Policy</a>
<a>Legal Disclaimer</a>
</div>

</footer>



<style jsx>{`

.page{
font-family:Poppins;
padding:30px;
background:linear-gradient(180deg,#fff7fb,#f2ecff,#fdf4ff);
color:#5b3dbf;
}

.nav{
display:flex;
justify-content:space-between;
margin-bottom:20px;
}

.navLinks{
display:flex;
gap:28px;
font-weight:500;
}

.logoWrap{
display:flex;
justify-content:center;
margin:10px 0;
}

.logo{
width:280px;
}

.hero{
text-align:center;
max-width:800px;
margin:40px auto;
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
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
text-align:center;
}

.support{
text-align:center;
margin:80px 0;
}

.heart{
color:#7b3fff;
margin:0 8px;
}

.supportBtn{
margin-top:20px;
padding:14px 36px;
background:#6d39ff;
color:white;
border:none;
border-radius:30px;
font-size:16px;
}

.footer{
text-align:center;
padding:50px;
background:#d7c4ff;
border-radius:25px;
margin-top:80px;
}

.lotus{
width:70px;
margin-bottom:10px;
}

.policies{
margin-top:15px;
display:flex;
justify-content:center;
gap:20px;
}

`}</style>

</main>

)
}
