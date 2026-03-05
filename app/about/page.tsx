"use client"

import Link from "next/link"

export default function About(){

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



{/* HOW NUTRIWISE WAS BORN */}

<section className="story">

<h2>How NutriWise Was Born</h2>

<p>
NutriWise was created from a simple but powerful realization — that
nutrition is often overlooked in cancer care even though it plays
a critical role in supporting patients during treatment.
</p>

<p>
During chemotherapy, radiation and recovery phases,
patients frequently experience fatigue, appetite loss,
weight changes and weakened immunity.
Families search for answers, but reliable nutrition guidance
specific to cancer care is often difficult to find.
</p>

<p>
NutriWise was founded with the vision of bridging this gap —
to provide compassionate, evidence-based nutritional support
that strengthens the body during one of the most challenging
journeys a person can face.
</p>

<p>
Our mission is simple: to ensure that no cancer patient has to
navigate nutrition and recovery alone.
</p>

</section>



{/* FOUNDER MESSAGE */}

<section className="founder">

<img src="/founder.jpeg" className="founderImg"/>

<div>

<h2>Message From the Founder</h2>

<p>
Cancer treatment can be one of the most emotionally and physically
demanding journeys a person will ever face.
</p>

<p>
Through NutriWise, our goal is to bring compassion,
clarity and scientific nutritional guidance to patients and families
who are navigating this difficult path.
</p>

<p>
Nutrition does not replace treatment — but it strengthens the body,
supports recovery and gives patients the resilience needed to
continue their fight.
</p>

<p>
Every patient deserves care, dignity and support during treatment.
NutriWise exists to ensure that guidance is always available when
patients need it the most.
</p>

</div>

</section>



{/* MISSION VISION */}

<section className="missionVision">

<div className="card">

<h3>Our Mission</h3>

<p>
To provide compassionate, evidence-based oncology nutrition
guidance that helps patients maintain strength, improve
treatment tolerance and support recovery throughout their
cancer journey.
</p>

</div>

<div className="card">

<h3>Our Vision</h3>

<p>
To make oncology nutrition an essential part of cancer care
globally — ensuring that every patient receives structured
nutritional guidance alongside medical treatment.
</p>

</div>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise is committed to supporting cancer patients with
compassionate and evidence-based nutritional guidance.
</p>

</footer>



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
filter:drop-shadow(0 0 30px rgba(200,150,255,0.6));
}



.story{
max-width:800px;
margin:60px auto;
line-height:1.8;
}



.founder{
display:flex;
gap:40px;
align-items:center;
max-width:900px;
margin:80px auto;
}

.founderImg{
width:160px;
height:160px;
border-radius:50%;
object-fit:cover;
}



.missionVision{
display:flex;
gap:30px;
justify-content:center;
flex-wrap:wrap;
margin:80px auto;
}

.card{
background:white;
padding:25px;
border-radius:15px;
width:320px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}



.footer{
margin-top:80px;
text-align:center;
padding:30px;

background:linear-gradient(
180deg,
#f3ecff,
#efe8ff
);

border-radius:20px;
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



/* MOBILE RESPONSIVE */

@media(max-width:768px){

.page{
padding:20px;
}

.logo{
width:200px;
}

.founder{
flex-direction:column;
text-align:center;
}

.founderImg{
width:130px;
height:130px;
}

.missionVision{
flex-direction:column;
align-items:center;
}

.card{
width:100%;
max-width:400px;
}

}

`}</style>

</main>

)

}
