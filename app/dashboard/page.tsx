"use client"

import { useState } from "react"
import Link from "next/link"

export default function Dashboard(){

const [hover,setHover] = useState("")

return(

<main className="page">

{/* NAVBAR */}

<nav className="nav">

<img src="/Logo.png" className="logo"/>

<div className="links">
<Link href="/dashboard">Home</Link>
<Link href="/profile">Profile</Link>
</div>

</nav>


{/* MOTIVATIONAL QUOTE */}

<section className="quote">

<p>
You are stronger than you think.  
Every day your body continues its quiet fight and healing.
</p>

</section>


{/* CARE CUDDLE (TIP OF DAY) */}

<section className="tip">

<h3>Care Cuddle 🌿</h3>

<p>
Gentle nutrition tip of the day will appear here.
Small supportive guidance that helps patients
navigate treatment with comfort.
</p>

</section>


{/* ANNOUNCEMENTS */}

<section className="announcement">

<h3>Announcements</h3>

<div className="card">
Upcoming webinars, support sessions and community
events will appear here.
</div>

</section>


{/* ARTICLES */}

<section className="articles">

<h3>Helpful Articles</h3>

<div className="grid">

<div className="card">
Nutrition during chemotherapy
</div>

<div className="card">
Managing appetite loss during treatment
</div>

<div className="card">
Foods that support recovery
</div>

</div>

</section>


{/* NGO CONNECT */}

<section className="ngo">

<button onClick={()=>window.open("/ngo","_blank")}>
Connect to NGO Support
</button>

</section>


{/* LOCKED FEATURES */}

<section className="features">

<div 
className="feature locked"
onMouseEnter={()=>setHover("medicine")}
onMouseLeave={()=>setHover("")}
>
💊 Medicine Tracker
</div>


<div 
className="feature locked"
onMouseEnter={()=>setHover("diet")}
onMouseLeave={()=>setHover("")}
>
🥗 Diet Chart
</div>


<div 
className="feature locked"
onMouseEnter={()=>setHover("recipe")}
onMouseLeave={()=>setHover("")}
>
🍲 Healing Recipes
</div>


<div 
className="feature locked"
onMouseEnter={()=>setHover("nutrition")}
onMouseLeave={()=>setHover("")}
>
👩‍⚕️ Message Nutritionist
</div>


<div 
className="feature locked"
onMouseEnter={()=>setHover("counter")}
onMouseLeave={()=>setHover("")}
>
📊 Nutrition Counter
</div>

</section>


{/* FEATURE PREVIEW */}

{hover && (

<div className="preview">

{hover==="medicine" && (
<p>
Track medicines, reminders and maintain
a complete treatment record.
</p>
)}

{hover==="diet" && (
<p>
Weekly personalized diet chart created by
oncology nutritionists.
</p>
)}

{hover==="recipe" && (
<p>
Healing recipes designed specifically for
patients undergoing cancer treatment.
</p>
)}

{hover==="nutrition" && (
<p>
Directly connect with your nutritionist
for guidance and support.
</p>
)}

{hover==="counter" && (
<p>
Track calories, protein and daily nutrition
requirements.
</p>
)}

</div>

)}


{/* WHATSAPP FLOATER */}

<a
href="https://wa.me/918320867088"
target="_blank"
className="whatsapp"
>
💬
</a>



<style jsx>{`

.page{
font-family:Poppins;
padding:30px;

background:linear-gradient(
180deg,
#fff7fb,
#f3ecff,
#efe8ff,
#fdf4ff
);

color:#4a3ca6;
min-height:100vh;
}


.nav{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:30px;
}


.logo{
width:160px;
}


.links{
display:flex;
gap:20px;
}


.quote{
text-align:center;
font-size:18px;
max-width:600px;
margin:auto;
margin-bottom:40px;
}


.tip{
background:white;
padding:20px;
border-radius:15px;
max-width:600px;
margin:auto;
text-align:center;

box-shadow:0 5px 20px rgba(0,0,0,0.05);
}


.announcement{
margin-top:50px;
text-align:center;
}


.articles{
margin-top:50px;
text-align:center;
}


.grid{
display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;
margin-top:20px;
}


.card{
background:white;
padding:20px;
border-radius:15px;
width:220px;

box-shadow:0 5px 20px rgba(0,0,0,0.05);
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

display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;
}


.feature{
background:white;
padding:20px;
border-radius:15px;
width:200px;
text-align:center;

box-shadow:0 5px 20px rgba(0,0,0,0.05);
}


.locked{
opacity:0.7;
cursor:pointer;
}


.preview{
background:white;
padding:15px;
border-radius:10px;
text-align:center;
max-width:350px;
margin:20px auto;

box-shadow:0 5px 20px rgba(0,0,0,0.08);
}


.whatsapp{
position:fixed;
right:20px;
bottom:30px;

width:55px;
height:55px;

background:#25D366;

border-radius:50%;

display:flex;
align-items:center;
justify-content:center;

color:white;
font-size:24px;
}


@media(max-width:768px){

.grid{
flex-direction:column;
align-items:center;
}

.features{
flex-direction:column;
align-items:center;
}

.logo{
width:120px;
}

}

`}</style>

</main>

)
}
