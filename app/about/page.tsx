"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About NutriWise</h1>
        <p>
          Supporting strength, healing, and dignity through compassionate nutrition care.
        </p>
      </section>


      {/* HOW NUTRIWISE WAS BORN */}
      <section className="about-story">

        <h2>How NutriWise Was Born</h2>

        <p>
          NutriWise was born from a simple yet powerful realization — while cancer
          treatment focuses intensely on medicines and procedures, nutrition often
          remains an overlooked pillar of healing.
        </p>

        <p>
          For many patients, the journey through cancer treatment is not just about
          battling the disease. It is also about navigating fatigue, loss of appetite,
          weakness, emotional stress, and the constant uncertainty that accompanies
          every stage of treatment.
        </p>

        <p>
          During this time, food becomes more than nourishment — it becomes strength,
          comfort, and sometimes the very thing that helps patients continue their
          fight.
        </p>

        <p>
          NutriWise was created with the belief that no patient should feel alone
          while navigating these challenges. Through compassionate oncology
          nutrition guidance, emotional encouragement, and practical support,
          NutriWise aims to stand beside patients and their families throughout
          their journey.
        </p>

        <p>
          Because healing is not just about treatment.  
          Healing is about care, strength, and support.
        </p>

      </section>



      {/* FOUNDER MESSAGE */}
      <section className="founder-section">

        <div className="founder-image">
          <Image
            src="/founder.png"
            alt="Founder"
            width={220}
            height={220}
            className="founder-photo"
          />
        </div>

        <div className="founder-message">

          <h2>Founder’s Message</h2>

          <p>
            NutriWise was created with a deep sense of empathy for individuals
            navigating the difficult journey of cancer treatment.
          </p>

          <p>
            During this time, patients and their families face not only medical
            challenges but also emotional and physical struggles that can feel
            overwhelming.
          </p>

          <p>
            Nutrition plays an important role in supporting strength, recovery,
            and overall wellbeing during treatment, yet many patients struggle
            to find guidance that is both medically informed and compassionate.
          </p>

          <p>
            Through NutriWise, our goal is to provide supportive, thoughtful
            nutrition guidance that respects each patient’s unique journey.
          </p>

          <p>
            We hope NutriWise becomes a space where patients feel supported,
            understood, and empowered — one step at a time.
          </p>

        </div>

      </section>



      {/* MISSION + VISION */}
      <section className="mission-vision">

        <div className="card">

          <div className="card-inner">

            <div className="card-front">
              <h3>Our Mission</h3>
            </div>

            <div className="card-back">
              <p>
                Our mission is to provide compassionate oncology nutrition
                support that helps cancer patients maintain strength,
                improve quality of life, and navigate treatment with
                greater confidence and comfort.
              </p>
            </div>

          </div>

        </div>


        <div className="card">

          <div className="card-inner">

            <div className="card-front">
              <h3>Our Vision</h3>
            </div>

            <div className="card-back">
              <p>
                Our vision is to create a supportive platform where every
                cancer patient has access to trusted nutrition guidance,
                emotional encouragement, and care that extends beyond
                treatment.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
