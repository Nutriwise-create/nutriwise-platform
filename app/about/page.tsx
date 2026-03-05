"use client"

import Link from "next/link"

export default function About() {

return(

<main className="page">


{/* NAVBAR */}

<nav className="nav">

<div></div>

<div className="navLinks">

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
<img src="/Logo.png" alt="NutriWise Logo" className="logo"/>
</div>



{/* STORY */}

<section className="section">

<h1>How NutriWise Was Born</h1>

<p>
NutriWise was born from a simple yet powerful realization —
while medicine fights cancer, nutrition strengthens the body
through one of the toughest battles of life.
</p>

<p>
During cancer treatment, patients often experience fatigue,
loss of appetite, digestive discomfort and emotional stress.
Families try their best to support, yet many feel confused
about what nutrition truly supports healing.
</p>

<p>
NutriWise was created to bring clarity, compassion and
evidence-based nutrition guidance into cancer care so patients
can focus on
