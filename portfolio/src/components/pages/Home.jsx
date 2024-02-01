//import React from 'react';
import './Style.scss';

function Home() {
  return (
    <div className = "infowrap">
      <div className="central">
      <img src="./assets/pig-logo-small-blk-02.png" className ="logo"></img>
      <h1 className='titlestyle2' >Xanthe E. Horner</h1>
      <h2 className="tagline">Intuitive Web Development</h2>
      </div>
      <div className = "wrap-flexi">
      <img src="./assets/me.jpeg" width="300px" className="headshot"></img>
   
      <p ClassName = "para">I am a Web Developer committed to creating visually-pleasing, user-first websites that are intuitively designed, combining style and substance to deliver exceptional user experiences. Drawing from my background in Art & Design, I utilize creative principles to infuse my web projects with aesthetic appeal and functional elegance. My recent completion of a Front-End Web Development Bootcamp has equipped me with extensive training in JavaScript, Node, React, and Jest, along with proficiency in agile methods.
As a professional, I continuously strive to integrate the latest industry trends and best practices into my work to ensure that every digital project exceeds expectations. Additionally, I am seeking to work on projects in the arts and cultural sector to channel my passion for merging technology with artistic expression.
</p>


</div>

<h3>Explore my portfolio to see my deployed projects & learn more about me</h3>

      <a href="./assets/XantheEHornerWebCV2024.pdf" target="_blank" rel="noopener noreferrer"><h3>CV</h3></a>
     
 
    </div>
  );
}

export default Home;
