'use client';

//import Home from './_components/Home/Home';
//import PrimaryButton from './_components/Button/PrimaryButton'
//import SecondaryButton from './_components/Button/SecondaryButton';

import styles from "./Programs.module.scss";
import Image from "next/image";
import Link from "next/link";
import ProgramCard from './programCard.jsx';
import Stat from './stats.jsx'
//import Link from "next/link"; // Import Link to popup




import React from "react";

const programs = [
  {
    title: 'Emergency Shelters',
    subtitle: 'Fourth and Hope\'s 100-bed shelter, open 24/7 provides essential services like showers, laundry and case management ',
    text: 'Walter’s House has supported 209 participants, with 61 completing treatment and 39 graduating from outpatient programs. In 2023, it sheltered 242 individuals and placed 41 in stable housing. ',
    image: 'images/Programs/EmergencyShelters.svg',
  },
  {
    title: 'Housing',
    subtitle: 'Fourth & Hope provides permanent supportive and transitional housing to promote stability and recovery',
    text: 'Permanent Supportive Housing serves individuals and families with disabilities who have experienced homelessness. All housing clients receive ongoing case management. In 2023, 58 people (43 households) were housed in permanent supportive housing, and 88 were housed in transitional sober living.',
    image: 'images/Programs/Housing.svg',
  },
  {
    title: 'Meals',
    subtitle: '',
    text: 'Fourth & Hope offers 3 meals/day to anyone in need of a hot meal. Lunch is served every day at 12 PM, and dinner at 5 PM. In 2023, 92,000 meals were served.',
    image: 'images/Programs/Meals.svg',
  }

];

const byNumbers = [
  {
    value: '242',
    description: 'emergency shelters',
    image: 'images/Programs/emergencyIcon.svg',
  },
  {
    value: '58',
    description: 'in permanent \nsupportive housing',
    image: 'images/Programs/housingSupport.svg',
  },
  {
    value: '92000',
    description: 'meals served',
    image: 'images/Programs/mealsServed.svg',
  },
  {
    value: '41',
    description: 'in stable housing',
    image: 'images/Programs/stableHousing.svg',
  },
  {
    value: '88',
    description: 'in transitional sober living',
    image: 'images/Programs/soberLiving.svg',
  }
];

export default function Programs() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.hero_container}>
          <Image src="images/Programs/ProgramHeader.svg"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className={styles.Titles}>
        <h1>OUTREACH</h1>
        <br />
        <p>Fourth & Hope provides day services from 8:00 a.m. to 5:30 p.m. in a gated courtyard, offering protection from exrtreme weather.
          Client care coordinators connect inidividuals to resources, including healthcare, housing, and the Coordinated Entry System.
        </p>
        <p>
          The Woodland Police Departement's HOST team builds relationships with individials experienceing homelessness, offering
          asssments and housing navigation across Yolo County.
        </p>
      </div>
      {/*RISING NUMBERS HERE ~ Function call */}
      <div>
        <div className={styles.statsContainer}>
          <div className={styles.TitleNumbers}>
            <h2>2023 By the Numbers</h2>
          </div>
          {byNumbers.map((s, index) => (
            <Stat
              key={index} // Use a unique identifier if available
              value={s.value}
              label={s.description}
              image={s.image}
            />
          ))}
        </div>
      </div>


      <div>
        <div className={styles.ProgramTitle}>
          <h1>PROGRAMS</h1>
        </div>
        {programs.map((p) => (
          <ProgramCard title={p.title} subtitle={p.subtitle} text={p.text} image={p.image} />

        ))}
      </div>


      <div className={styles.Walters}>
        <div className={styles.text}>
          <h2>Walter's House</h2>
          <p>Walter’s House is a residential substance use disorder treatment facility for women and men.</p>
          <p>Walter’s House has supported 209 participants, with 61 completing treatment and 39 graduating from outpatient programs.</p>

          <Link href="/walters-house">
            <button className={styles.Linksbutton}>Certifications</button>
          </Link>
        </div>

        <div className={styles.image}>
          <img src="images/Programs/Walters.svg" />
        </div>
      </div>



      <div className={styles.Support}>
        <h2>Support our programs</h2>
        <p>Considering donating? Just <strong>$35</strong> provides a night of shelter and food for one person.</p>
        <p> <strong>Can’t donate?</strong> Our dedicated volunteers help our team prepare, cook, and serve these meals. We are so grateful to the
          community members who support our program and help those in need. </p>


        <div className={styles.button_container}>
          <Link href="/donate">
            <button className={styles.Linksbutton}>Donate</button>
          </Link>
          <Link href="/volunteer">
            <button className={styles.Linksbutton}>Volunteer</button>
          </Link>
        </div>

      </div>

    </div>
  );
}


/*

Notes
- Divide into thirds 
  - Animated Numbers
  - 
- USE PERCENTAGES - No pixels
- Numbers increase from 0 
- Components Folder

notes
{programs.map(({title, subtitle, text, image},index)=> (
            <Item key = {index}>
              <ProgramCard title={program.title} subtitle={program.subtitle}/>
            <Item/>
          ))}
*/