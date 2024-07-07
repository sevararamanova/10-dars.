import React from 'react';
import './Skills.css';

const skills = [
  {
    id: 1,
    title: 'IT developer',
    description: 'JavaScript - eng mashhur dasturlash tillaridan biri, veb-saytlarni interaktiv qilish uchun ishlatiladi,React.js - komponentlar asosidagi kutubxona, foydalanuvchi interfeyslarini yaratish uchun ishlatiladi.',
  },
  {
    id: 2,
    title: 'Stylist',
    description:'Sochlar jilosi va yuz porlashi uchun' 
  },
  {
    id: 3,
    title: 'Nail Artist',
    description:'Gigiyena va gozallik'
  },
  {
    id: 4,
    title: 'MAster Beauty',
    description: 'gozalika intilish'
  },
  
  // Ko'proq ko'nikmalar qo'shishingiz mumkin
];

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills__title">Mening Ko'nikmalarim</h1>
      <div className="skills__grid">
        {skills.map(skill => (
          <div key={skill.id} className="skill__card">
            <h2 className="skill__title">{skill.title}</h2>
            <p className="skill__description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

