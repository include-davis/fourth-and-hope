'use client';
import styles from "./Programs.module.scss";
import Image from "next/image";
import Link from "next/link"
import ProgramCard from './programCard.jsx'
//import PrimaryButton from './_components/Button/PrimaryButton';
//import SecondaryButton from './_components/Button/SecondaryButton';

import React from "react";

const programs = [
  {
    title:'Emergency Shelters' , 
    subtitle: 'Fourth and Hope\'s 100-bed shelter, open 24/7 provides essential services like showers, laundry and case management ',
    text: 'Walter’s House has supported 209 participants, with 61 completing treatment and 39 graduating from outpatient programs.',
    image:'<img src="/images/housing.jpg" alt="Housing Program" />',
  },
  {
    title:'Housing' , 
    subtitle: 'Fourth & Hope provides permanent supportive and transitional housing to promote stability and recovery',
    text: 'Permanent Supportive Housing serves individuals and families with disabilities who have experienced homelessness. All housing clients receive ongoing case management.',
    image:'<img src="/images/housing.jpg" alt="Housing Program" />',
  },
  {
    title:'Meals' , 
    subtitle: '',
    text: 'Fourth & Hope offers 3 meals/day to anyone in need of a hot meal. Lunch is served every day at 12 PM, and dinner at 5 PM.',
    image:'<img src="/images/meals.jpg" alt="Housing Program" />',
  },
  {
    title:'Walter\'s House' , 
    subtitle: 'Walter’s House is a residential substance use disorder treatment facility for women and men',
    text: 'Services include assessment, treatment planning, counseling, education, family therapy, crisis intervention, and aftercare planning. The outpatient program offers group and individual sessions.',
    image:'<img src="/images/meals.jpg" alt="Housing Program" />',
  },
];

const byNumbers = [
  {
    value: '242',
    description: 'emergency shelters',
    image: '',
  },
  {
    value: '58',
    description: 'in permanent supportive housing',
    image: '',
  },
  {
    value: '92,000',
    description: 'meals served',
    image: '',
  },
  {
    value: '41 ',
    description: 'in stable housing',
    image: '',
  },
  {
    value: '88',
    description: 'in transitional sober living',
    image: '',
  },
]

export default function Programs() {
    return (
      <div>
        {/* IMAGE HERE*/}
        <div className={styles.Titles}>
        <h1>OUTREACH</h1>
        <p>Fourth & Hope provides day services from 8:00 a.m. to 5:30 p.m. in a gated courtyard, offering protection from exrtreme weather.
          Client care coordinators connect inidividuals to resources, including healthcare, housing, and the Coordinated Entry System.
        </p>
        <p>
          The Woodland Police Departement's HOST team builds relationships with individials experienceing homelessness, offering 
          asssments and housing navigation across Yolo County.
        </p>
        </div>


        {/*RISING NUMBERS HERE ~ Function call */}

      
        
        {/* <ProgramCard title={programs.title} subtitle={programs.subtitle}/> */}
        <div>
        <div className={styles.Titles}>
        <h1>PROGRAMS</h1>
        </div>

        {programs.map((p)=> (
           <ProgramCard title={p.title} subtitle={p.subtitle} text={p.text} image={p.image}/>
            
          ))}
      
        </div>


          {/* Walters house button ~ should I make Walter's seperate?*/ }


          <div className={styles.Support}>
            <h2>Support our programs</h2>
              <p>Considering donating? Just $35 provides a night of shelter and food for one person.</p>
              <p>Can’t donate? Our dedicated volunteers help our team prepare, cook, and serve these meals. We are so grateful to the 
                community members who support our program and help those in need. </p>
            {/* donate buttons */}
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