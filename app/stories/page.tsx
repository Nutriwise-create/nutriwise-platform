"use client"

import Link from "next/link"

export default function Stories(){

return(

<main className="page">


{/* NAVIGATION */}

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



{/* HEADER */}

<section className="header">

<h1>Stories of Strength</h1>

<p>
Every cancer journey is unique. Behind every diagnosis lies a
story of courage, resilience and hope. These stories remind us
that strength often reveals itself in the most difficult moments
of life.
</p>

</section>



{/* STORIES */}

<section className="stories">


{/* STORY */}

<div className="story">

<img src="https://tse1.mm.bing.net/th/id/OIP.AMcpSZilcUiZZjBqjPBygQHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"/>

<div>

<h3>Hina Khan</h3>

<p className="subtitle">Actor • Story of Courage</p>
<p> Your diagnosis does not define your destiny.</p>
  
<p>
Hina Khan has spoken openly about her health challenges,
showing the world that vulnerability and strength can
coexist. Her courage inspired thousands of people who
were silently fighting their own battles.
</p>


</div>

</div>



<div className="story">

<img src="https://images.mubicdn.net/images/cast_member/28424/cache-159661-1469083532/image-w856.jpg?size=800x"/>

<div>

<h3>Sonali Bendre</h3>

<p className="subtitle">Actor • Metastatic Cancer Survivor</p>

<p>
"Strength isn't about never feeling afraid — it's about moving forward despite the fear."
</p>

<p>
When Sonali Bendre shared her diagnosis publicly,
millions were shocked. Yet she faced treatment
with grace and honesty.Through hospital updates, 
reflections and courage, she reminded people that 
vulnerability can inspire strength and community.
</p>


</div>

</div>



<div className="story">

<img src="https://tse3.mm.bing.net/th/id/OIP.ndZYNyOqk1q-I1C8PVbxFwAAAA?w=220&h=227&rs=1&pid=ImgDetMain&o=7&rm=3"/>

<div>

<h3>Anurag Basu</h3>

<p className="subtitle">Director • Leukemia Survivor</p>
<p> Hope can be stronger than even the most frightening diagnosis. </p>
  
<p>
At 34, Anurag Basu was diagnosed with acute leukemia 
and given very little chance of survival. Even during 
treatment he kept imagining stories he still wanted to tell.
That hope became his strength and after recovery he went 
on to create some of India’s most loved films
</p>


</div>

</div>



<div className="story">

<img src="https://cdn-wp.thesportsrush.com/2016/08/Yuvraj-Singh-hd-picture.jpg?w=3840&q=60"/>

<div>

<h3>Yuvraj Singh</h3>

<p className="subtitle">Cricket Champion • Lung Cancer Survivor</p>
<p> Cancer may challenge your body, but it cannot defeat your spirit.</p>

  
<p>
Champions are not made only on the field. After the 
2011 Cricket World Cup, Yuvraj Singh was diagnosed with
a rare form of cancer. Chemotherapy left him exhausted
and far from the sport he loved. But he refused to 
surrender. With courage, discipline and hope, he returned
stronger.
</p>

</div>

</div>



<div className="story">

<img src="https://tse1.mm.bing.net/th/id/OIP.TjU56N86yfjnkKp1ej95HQHaLG?rs=1&pid=ImgDetMain&o=7&rm=3"/>

<div>

<h3>Lisa Ray</h3>

<p className="subtitle">Actor • Multiple Myeloma Survivor</p>
<p>Every day you wake up is a victory worth celebrating.</p>
<p>
Lisa Ray was diagnosed with multiple myeloma, a rare blood cancer. 
Through stem-cell transplant, meditation and resilience she 
entered remission and became an advocate for 
living life fully despite illness.
</p>

</div>

</div>



  <div className="story">

<img src="https://www.masala.com/cloud/2025/01/15/Rakesh-Roshan-1568x882.jpg"/>

<div>

<h3>Rakesh Roshan</h3>

<p className="subtitle">Director • Throat Cancer Survivor</p>
<p> Early action can turn fear into survival. </p>
<p>
A routine medical checkup revealed throat cancer for filmmaker 
Rakesh Roshan. Early detection and timely treatment saved his 
life, turning his story into a powerful reminder about
preventive care
</p>

</div>

</div>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise stands beside patients and families, offering
compassionate oncology nutrition support through every
stage of their journey.
</p>

</footer>



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
}



.header{
text-align:center;
max-width:700px;
margin:auto;
margin-bottom:60px;
}



.story{
display:flex;
gap:25px;
background:white;
padding:25px;
border-radius:15px;
margin-bottom:30px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.story img{
width:120px;
height:120px;
border-radius:50%;
object-fit:cover;
}



.subtitle{
font-weight:600;
margin-bottom:10px;
}



.timeline{
display:flex;
align-items:center;
gap:10px;
margin-top:15px;
}

.line{
height:2px;
width:40px;
background:#6d4df5;
}



.footer{
margin-top:80px;
text-align:center;
padding:40px;

background:linear-gradient(
180deg,
#f3ecff,
#efe8ff
);
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



/* MOBILE */

@media(max-width:768px){

.page{
padding:20px;
}

.story{
flex-direction:column;
text-align:center;
}

.story img{
margin:auto;
}

}

`}</style>

</main>

)

}
