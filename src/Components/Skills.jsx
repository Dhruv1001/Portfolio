const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Blockchain</h3>
          <ul>
            <li>Solidity</li>
            <li>ERC-20</li>
            <li>Ethers.js</li>
            <li>Metamsk integration</li>
            <li>Ganache & Truffle</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
