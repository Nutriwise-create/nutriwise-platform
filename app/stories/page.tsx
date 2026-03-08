"use client"

import Link from "next/link"
import { useState } from "react"

export default function Stories(){

const [policy,setPolicy]=useState("")

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

{/* story cards remain exactly same */}

<div className="story">
<img src="https://tse1.mm.bing.net/th/id/OIP.AMcpSZilcUiZZjBqjPBygQHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"/>
<div>
<h3>Hina Khan</h3>
<p className="subtitle">Actor • Story of Courage</p>
<p>Your diagnosis does not define your destiny.</p>
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
<p>"Strength isn't about never feeling afraid — it's about moving forward despite the fear."</p>
<p>
When Sonali Bendre shared her diagnosis publicly,
millions were shocked. Yet she faced treatment
with grace and honesty.
</p>
</div>
</div>

<div className="story">
<img src="https://tse3.mm.bing.net/th/id/OIP.ndZYNyOqk1q-I1C8PVbxFwAAAA?w=220&h=227&rs=1&pid=ImgDetMain&o=7&rm=3"/>
<div>
<h3>Anurag Basu</h3>
<p className="subtitle">Director • Leukemia Survivor</p>
<p>Hope can be stronger than even the most frightening diagnosis.</p>
<p>
At 34, Anurag Basu was diagnosed with acute leukemia.
His determination and hope helped him fight through treatment.
</p>
</div>
</div>

<div className="story">
<img src="https://cdn-wp.thesportsrush.com/2016/08/Yuvraj-Singh-hd-picture.jpg?w=3840&q=60"/>
<div>
<h3>Yuvraj Singh</h3>
<p className="subtitle">Cricket Champion • Lung Cancer Survivor</p>
<p>Cancer may challenge your body, but it cannot defeat your spirit.</p>
<p>
After the 2011 Cricket World Cup, Yuvraj Singh was diagnosed
with cancer. Through courage and determination he returned
stronger than ever.
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
Lisa Ray was diagnosed with multiple myeloma. Through
treatment and resilience she became a strong advocate
for living life fully.
</p>
</div>
</div>

<div className="story">
<img src="https://www.masala.com/cloud/2025/01/15/Rakesh-Roshan-1568x882.jpg"/>
<div>
<h3>Rakesh Roshan</h3>
<p className="subtitle">Director • Throat Cancer Survivor</p>
<p>Early action can turn fear into survival.</p>
<p>
Early detection and timely treatment helped Rakesh Roshan
successfully overcome cancer.
</p>
</div>
</div>

</section>



{/* SHARE STORY */}

<section className="shareStory">

<h2>Share Your Story</h2>

<p>
Your journey may inspire someone who is currently fighting
their own battle. By sharing your experience, you may give
hope to someone who needs it most.
</p>

<button
className="shareBtn"
onClick={()=>setPolicy("share")}
>
Share Your Story to Inspire Others
</button>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<div className="policies">

<button onClick={()=>setPolicy("privacy")}>Privacy Policy</button>
<button onClick={()=>setPolicy("refund")}>Refund Policy</button>
<button onClick={()=>setPolicy("legal")}>Legal Disclaimer</button>

</div>

<p>
NutriWise stands beside patients and families,
offering compassionate oncology nutrition support
through every stage of their journey.
</p>

</footer>



{/* POPUPS */}

{policy && (

<div className="popup">

<div className="popupBox">

<button className="close" onClick={()=>setPolicy("")}>✕</button>

{policy==="share" && (
<div>
<h3>Share Your Story</h3>
<p>
If you would like your journey to inspire others,
please send your story to:
</p>
<p><b>join.nutriwise@outlook.com</b></p>
</div>
)}

{policy==="privacy" && (
<p>NutriWise respects and protects the privacy of all individuals who interact with our platform...</p>
)}

{policy==="refund" && (
<p>Refund requests may be considered within 10 calendar days from the date of payment...</p>
)}

{policy==="legal" && (
<p>NutriWise provides evidence-based nutritional guidance intended to support individuals...</p>
)}

</div>

</div>

)}



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/918320867088" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"/>
</a>

<a href="https://www.linkedin.com/company/nutriwise26/" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"/>
</a>

<a href="https://www.youtube.com/@NutriWise_26" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"/>
</a>

<a href="https://x.com/NutriWise26" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"/>
</a>

<a href="mailto:join.nutriwise@outlook.com">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"/>
</a>

</div>



<style jsx>{`

.shareStory{
text-align:center;
max-width:700px;
margin:80px auto;
}

.shareBtn{
background:#7b5cff;
color:white;
padding:14px 32px;
border:none;
border-radius:25px;
font-size:16px;
cursor:pointer;
margin-top:20px;
}

.policies{
display:flex;
justify-content:center;
gap:15px;
margin-bottom:10px;
flex-wrap:wrap;
}

.popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
}

.popupBox{
background:white;
padding:30px;
max-width:500px;
border-radius:10px;
}

.close{
float:right;
background:none;
border:none;
font-size:18px;
cursor:pointer;
}

`}</style>

</main>

)

}
