"use client"

import Image from "next/image"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function Home() {

const testimonials = [
{ name:"Priya Mehta", city:"Mumbai", text:"During chemotherapy I had lost my appetite completely. The nutritional guidance helped me regain strength gradually.", img:"https://randomuser.me/api/portraits/women/11.jpg"},
{ name:"Ramesh Shah", city:"Ahmedabad", text:"Nutrition support helped me maintain my weight and energy during treatment.", img:"https://randomuser.me/api/portraits/men/32.jpg"},
{ name:"Anita Patel", city:"Surat", text:"Food finally became manageable again. The support felt truly compassionate.", img:"https://randomuser.me/api/portraits/women/65.jpg"},
{ name:"Kunal Verma", city:"Delhi", text:"I finally understood what my body needed during therapy.", img:"https://randomuser.me/api/portraits/men/71.jpg"},
{ name:"Meena Iyer", city:"Chennai", text:"The guidance was simple yet powerful during difficult days.", img:"https://randomuser.me/api/portraits/women/44.jpg"},
{ name:"Arjun Nair", city:"Bangalore", text:"It helped me regain strength slowly during recovery.", img:"https://randomuser.me/api/portraits/men/22.jpg"},
]

return (

<div className="min-h-screen text-gray-800 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">

{/* NAVBAR */}

<header className="flex justify-end px-10 py-6 text-sm font-medium space-x-6">

<a href="#">About Us</a>
<a href="#">Our Nutritionists</a>
<a href="#">Stories of Strength</a>
<a href="#">Book Consultation</a>
<a href="#">Login</a>

</header>


{/* LOGO SECTION WITH GLOW */}

<div className="flex justify-center items-center py-12 relative">

<div className="absolute w-[320px] h-[320px] bg-purple-400 rounded-full blur-[120px] opacity-30"></div>
<div className="absolute w-[300px] h-[300px] bg-pink-400 rounded-full blur-[120px] opacity-30"></div>

<Image
src="/logo.png"
alt="NutriWise"
width={260}
height={100}
className="relative z-10"
/>

</div>


{/* HERO */}

<section className="text-center px-6 pb-20">

<h1 className="text-4xl md:text-5xl font-serif text-purple-900 max-w-3xl mx-auto leading-tight">

Medicine treats cancer, but nutrition strengthens your body

</h1>

<p className="mt-6 text-lg max-w-xl mx-auto text-gray-700">

Compassionate oncology nutrition guidance designed to support strength,
healing, and dignity throughout the cancer journey.

</p>

</section>


{/* WHY NUTRITION MATTERS */}

<section className="py-20 px-6 max-w-4xl mx-auto">

<h2 className="text-3xl font-serif text-center text-purple-900 mb-10">

Why Right Nutrition Matters

</h2>

<div className="bg-white shadow-xl rounded-2xl p-10 leading-relaxed text-gray-700">

Cancer treatment places enormous stress on the body. Chemotherapy,
radiation therapy, surgery, and targeted treatments often bring
challenging side effects such as fatigue, nausea, appetite loss,
digestive discomfort, and muscle weakness.

During treatment the body requires the right nourishment not only to
maintain strength but also to recover from therapy.

Balanced oncology nutrition helps support immune function, preserve
muscle mass, improve treatment tolerance, and enhance overall wellbeing
throughout therapy.

At NutriWise our goal is to support patients and families with
compassionate, evidence-informed nutritional guidance so that strength,
healing, and resilience remain possible even during difficult phases
of treatment.

</div>

</section>


{/* WHAT WE PROVIDE */}

<section className="py-20 bg-white">

<h2 className="text-3xl font-serif text-center text-purple-900 mb-16">

What We Provide

</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

<div className="p-8 rounded-xl shadow hover:shadow-2xl transition bg-gradient-to-br from-purple-50 to-pink-50">

<h3 className="text-xl font-semibold text-purple-800 mb-4">

Personalized Oncology Nutrition

</h3>

<p>

Nutrition plans designed according to cancer type, treatment stage,
symptoms, and individual health needs.

</p>

</div>


<div className="p-8 rounded-xl shadow hover:shadow-2xl transition bg-gradient-to-br from-purple-50 to-pink-50">

<h3 className="text-xl font-semibold text-purple-800 mb-4">

Managing Treatment Side Effects

</h3>

<p>

Guidance to support appetite, digestion, fatigue management,
and maintaining strength during treatment.

</p>

</div>


<div className="p-8 rounded-xl shadow hover:shadow-2xl transition bg-gradient-to-br from-purple-50 to-pink-50">

<h3 className="text-xl font-semibold text-purple-800 mb-4">

Continuous Nutrition Support

</h3>

<p>

Ongoing compassionate guidance helping patients and families
navigate nutrition with clarity and confidence.

</p>

</div>

</div>

</section>


{/* TESTIMONIALS */}

<section className="py-20">

<h2 className="text-3xl font-serif text-center text-purple-900 mb-16">

Patient Experiences

</h2>

<div className="flex overflow-x-auto space-x-8 px-10">

{testimonials.map((t,i)=>(
<div key={i} className="min-w-[260px] bg-white shadow-lg rounded-xl p-6">

<Image
src={t.img}
alt={t.name}
width={60}
height={60}
className="rounded-full"
/>

<p className="mt-4 text-sm text-gray-700">

"{t.text}"

</p>

<p className="mt-3 font-medium text-sm">

{t.name} – {t.city}

</p>

</div>
))}

</div>

</section>


{/* SUPPORT A PATIENT */}

<section className="py-24 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">

<h2 className="text-3xl font-serif mb-6">

Support a Patient

</h2>

<p className="max-w-xl mx-auto mb-10">

Cancer treatment can be physically and emotionally exhausting.
Through the Support a Patient initiative, individuals and
organizations can help provide oncology nutrition guidance to
patients who may otherwise struggle to access this support.

</p>

<button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">

Support Now

</button>

<div className="mt-8 text-xl">

Patients Supported: <strong>124</strong>

</div>

</section>


{/* SOCIAL MEDIA */}

<section className="py-16 text-center">

<h2 className="text-2xl font-serif text-purple-900 mb-8">

You Can Find Us At

</h2>

<div className="flex justify-center space-x-6 text-2xl text-purple-700">

<a href="https://wa.me/918320867088"><FaWhatsapp/></a>
<a href="https://instagram.com/nutriwise_26"><FaInstagram/></a>
<a href="https://x.com/NutriWise26"><FaXTwitter/></a>
<a href="https://www.linkedin.com/company/nutriwise26"><FaLinkedin/></a>
<a href="https://www.youtube.com/@NutriWise_26"><FaYoutube/></a>
<a href="mailto:join.nutriwise@outlook.com"><MdEmail/></a>

</div>

</section>


{/* FOOTER */}

<footer className="py-10 text-center text-gray-500 text-sm">

<div className="mb-4 space-x-4">

<a href="#">Privacy Policy</a>
<a href="#">Refund Policy</a>
<a href="#">Legal Disclaimer</a>

</div>

<Image
src="/lotus.png"
alt="Lotus"
width={60}
height={60}
className="mx-auto"
/>

<p className="mt-4">

NutriWise – Supporting patients with compassionate oncology nutrition guidance.

</p>

</footer>


{/* FLOATING WHATSAPP */}

<a
href="https://wa.me/918320867088"
className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
>

<FaWhatsapp/>

</a>


</div>

)
}
