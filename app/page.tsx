"use client";

import { useEffect, useState } from "react";
import { FaLeaf, FaHandsHelping, FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const testimonials = [
  {
    name: "Priya Mehta",
    city: "Mumbai",
    text: "During chemotherapy I had lost my appetite completely. The nutritional guidance helped me regain strength gradually."
  },
  {
    name: "Ramesh Shah",
    city: "Delhi",
    text: "Nutrition support helped me maintain my weight and energy during treatment."
  },
  {
    name: "Meena Iyer",
    city: "Chennai",
    text: "The guidance was simple yet powerful during difficult days."
  },
  {
    name: "Arjun Nair",
    city: "Bangalore",
    text: "It helped me regain strength slowly during recovery."
  }
];

export default function Home() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (

    <main className="page">

      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#">About Us</a>
        <a href="#">Our Nutritionists</a>
        <a href="#">Stories of Strength</a>
        <a href="#">Login</a>
      </nav>


      {/* LOGO */}
      <div className="logoSection">
        <img src="/lotus.jpeg" className="logo" />
        <h1 className="brand">NutriWise</h1>
      </div>


      {/* HERO */}
      <section className="hero">
        <h2>Medicine treats cancer, but nutrition strengthens your body</h2>

        <p>
          Compassionate oncology nutrition guidance designed to support strength,
          healing and dignity throughout the cancer journey.
        </p>
      </section>


      {/* WHY NUTRITION */}
      <section className="section">

        <h3>Why Right Nutrition Matters</h3>

        <p>
          Cancer treatment places enormous stress on the body. Chemotherapy,
          radiation therapy, surgery and targeted treatments often bring
          challenging side effects such as fatigue, nausea, appetite loss,
          digestive discomfort and muscle weakness.
        </p>

        <p>
          Balanced oncology nutrition helps support immune function, preserve
          muscle mass, improve treatment tolerance and enhance overall wellbeing.
          NutriWise supports patients and families with compassionate,
          evidence-informed nutritional guidance during treatment and recovery.
        </p>

      </section>


      {/* WHAT WE PROVIDE */}
      <section className="section">

        <h3>What We Provide</h3>

        <div className="cards">

          <div className="card">
            <FaLeaf size={45}/>
            <h4>Personalized Oncology Nutrition</h4>
            <p>
              Nutrition plans designed according to cancer type,
              treatment stage, symptoms and individual health needs.
            </p>
          </div>

          <div className="card">
            <MdHealthAndSafety size={45}/>
            <h4>Managing Treatment Side Effects</h4>
            <p>
              Guidance to support appetite, digestion,
              fatigue management and maintaining strength.
            </p>
          </div>

          <div className="card">
            <FaHandsHelping size={45}/>
            <h4>Continuous Nutrition Support</h4>
            <p>
              Ongoing compassionate guidance helping patients
              navigate nutrition with clarity and confidence.
            </p>
          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}
      <section className="section">

        <h3>Patient Experiences</h3>

        <div className="testimonial">

          <FaHeartbeat size={28}/>

          <p className="quote">
            "{t.text}"
          </p>

          <p className="author">
            {t.name} — {t.city}
          </p>

        </div>

      </section>


      {/* SUPPORT SECTION */}
      <section className="section support">

        <h3>Support a Patient</h3>

        <p>
          Cancer treatment can be physically and emotionally exhausting.
          Through the Support a Patient initiative, individuals and
          organizations can help provide oncology nutrition support
          to patients who cannot access this guidance.
        </p>

        <button className="supportBtn">
          Support Now
        </button>

        <p className="counter">
          Patients Supported: 124
        </p>

      </section>


      {/* CONTACT */}
      <section className="section contact">

        <h3>You Can Find Us At</h3>

        <div className="social">

          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://youtube.com" target="_blank">YouTube</a>
          <a href="https://twitter.com" target="_blank">X</a>

        </div>

        <p>
          Email :
          <a href="mailto:join.nutriwise@outlook.com">
            join.nutriwise@outlook.com
          </a>
        </p>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <img src="/lotus.jpeg" className="footerLogo"/>

        <div className="policies">

          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href="/legal-disclaimer">Legal Disclaimer</a>

        </div>

        <p className="tagline">
          NutriWise — Supporting patients with compassionate oncology nutrition guidance
        </p>

      </footer>



<style jsx>{`

.page{
background: linear-gradient(180deg,#f8edff,#fde2f3);
padding:40px;
font-family:Poppins, sans-serif;
color:#333;
}

.nav{
display:flex;
justify-content:flex-end;
gap:35px;
margin-bottom:40px;
}

.nav a{
text-decoration:none;
color:#7b5aa6;
font-weight:500;
}

.logoSection{
text-align:center;
margin-bottom:40px;
}

.logo{
height:90px;
filter: drop-shadow(0 0 10px rgba(200,150,255,0.6));
}

.brand{
font-family:Playfair Display, serif;
margin-top:10px;
}

.hero{
text-align:center;
max-width:850px;
margin:auto;
margin-bottom:80px;
}

.section{
max-width:1000px;
margin:auto;
margin-bottom:80px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.card{
background:white;
padding:30px;
border-radius:16px;
box-shadow:0 12px 25px rgba(0,0,0,0.08);
text-align:center;
}

.testimonial{
background:white;
padding:35px;
border-radius:16px;
text-align:center;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.quote{
margin:15px 0;
}

.support{
text-align:center;
}

.supportBtn{
padding:14px 30px;
border:none;
border-radius:30px;
background:#c79cff;
color:white;
font-weight:600;
cursor:pointer;
margin-top:10px;
}

.counter{
margin-top:10px;
font-weight:600;
}

.social{
display:flex;
justify-content:center;
gap:20px;
margin-bottom:10px;
}

.footer{
text-align:center;
margin-top:80px;
}

.footerLogo{
height:60px;
margin-bottom:10px;
}

.policies{
display:flex;
justify-content:center;
gap:20px;
margin-bottom:10px;
}

.tagline{
font-size:14px;
opacity:0.7;
}

`}</style>


    </main>

  );
}
