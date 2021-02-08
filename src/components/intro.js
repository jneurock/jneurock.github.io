import React from 'react';

export default function Intro() {
  return (
    <p className="intro">
      <img
        className="intro__photo"
        alt="Rocky Neurock"
        src="/images/rocky.jpg"
      />
      Hi, my name is Rocky. I built this site so I could share thoughts about
      software engineering and leadership, write about my own personal approach
      and share my projects. <span className="hide-sm">I love to meet new people
      so feel free to connect with me!</span>
    </p>
  );
}