'use client';
import styles from "./Programs.module.scss";
import Image from "next/image";
import Link from "next/link"
import ProgramCard from './programCard.jsx'
import React from "react";

const programs = [
  {
    title:'Emergency Shelters' , 
    subtitle: 'Fourth and Hope\'s 100-bed shelter, open 24/7 provides essential services like showers, laundry and case management ',
    text: 'Walter’s House has supported 209 participants, with 61 completing treatment and 39 graduating from outpatient programs.',
    image:'',
  },
  {
    title:'Housing' , 
    subtitle: 'Fourth & Hope provides permanent supportive and transitionalhousing to promote stability and recovery',
    text: 'Permanent Supportive Housing serves individuals and families with disabilities who have experienced homelessness. All housing clients receive ongoing case management.',
    image:'<img src="/images/housing.jpg" alt="Housing Program" />',
  },
  {
    title:'Meals' , 
    subtitle: '',
    text: 'Fourth & Hope offers 3 meals/day to anyone in need of a hot meal. Lunch is served every day at 12 PM, and dinner at 5 PM.',
    image:'<img src="/images/meals.jpg" alt="Housing Program" />',
  },

];

export default function Programs() {
    return (
      <div>
        <h1>PROGRAMS</h1>
        {/* <ProgramCard title={programs.title} subtitle={programs.subtitle}/> */}
        {programs.map((p)=> (
           <ProgramCard title={p.title} subtitle={p.subtitle} text={p.text} image={p.image}/>
            
          ))}
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