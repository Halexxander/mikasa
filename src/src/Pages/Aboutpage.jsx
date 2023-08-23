import React from 'react';
import "./Aboutstyle.css"
import ListItem from './Listitem';


const AboutPage = () => {
  return (
    <div className='aboutdiv'>
      <h1>Alexander Inyama - React Developer</h1>
      <p>
        Hey there! I'm Alexander Inyama, a passionate React developer with a strong foundation in JavaScript, HTML, and CSS.
        My journey into the world of coding began in 2017, and since then, I have been honing my skills and expertise in front-end development.
        Born in 2004, I've always had a knack for problem-solving and creativity, which led me to pursue a Bachelor's degree in Computer Science to formalize my knowledge.
      </p>
      <h2>Portfolio Highlights:</h2>
      <ul>

        <ListItem>2008-2020: Attended Meved Model High, where I laid the groundwork for my future in technology and programming.</ListItem>
        <ListItem>2020-2024: Graduated Carias University, with a B.sc in Computer and Data Science</ListItem>
        <ListItem>2022-2023: Worked as a React Developer with over two years of hands-on experience in building dynamic and interactive user interfaces.</ListItem>
        <ListItem>Proficient in utilizing the latest React libraries and tools to enhance user experiences and optimize application performance.</ListItem>
        <ListItem>Grounded in front-end technologies such as JavaScript, HTML, and CSS, ensuring clean and effective code implementation.</ListItem>
        <ListItem>Highly skilled in translating design mockups and wireframes into functional React components with pixel-perfect accuracy.</ListItem>
        <ListItem>Adept at collaborating with cross-functional teams to deliver projects within tight deadlines, fostering a smooth development process.</ListItem>
        <ListItem>Leveraging soft skills developed through Jobberman training, I communicate effectively and prioritize teamwork in every project.</ListItem>
        <ListItem>Actively stay up-to-date with industry trends and advancements, continually seeking to expand my knowledge and skillset.</ListItem>
        <ListItem>Passionate about solving complex problems and finding innovative solutions to challenges in web development.</ListItem>

      </ul>
      <footer>
        <p>
          I take immense pride in my work and thrive on creating seamless and engaging web experiences through React development.
          My portfolio showcases a collection of projects that demonstrate my proficiency and dedication to excellence in the world of front-end development.
        </p>
        <p>
          Feel free to reach out to me for collaboration opportunities, coding discussions, or just to say hello! Let's build something incredible together!
        </p></footer>
    </div>
  );
};

export default AboutPage;
