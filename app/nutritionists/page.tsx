"use client"

import Link from "next/link"

export default function Nutritionists(){

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



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise is committed to supporting cancer patients
through compassionate oncology nutrition guidance.
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



/* MOBILE */

@media(max-width:768px){

.page{
padding:20px;
}

.logo{
width:200px;
}

}

`}</style>

</main>

)

}
