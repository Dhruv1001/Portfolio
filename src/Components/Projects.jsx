

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <h3>Voting DApp</h3>
          <p>
            Developed a blockchain-based Voting DApp that enables users to participate in secure and transparent elections without relying on a centralized authority. 
            The system leverages smart contracts to record votes immutably on the blockchain, preventing vote manipulation and ensuring data integrity. 
            The application includes wallet-based authentication, real-time vote counting, and a user-friendly React interface for seamless interaction.
          </p>
          <p><strong>Tech:</strong> Solidity, React, Ethers.js</p>
        </div>
        <div className="project-card">
          <h3>TokenMarketPlace - Smart Contract</h3>
          <p>
            Built a decentralized Token Marketplace where users can mint, list, and trade blockchain-based tokens using smart contracts. 
            The platform ensures trustless transactions, transparent pricing, and secure ownership transfers without intermediaries. 
            Integrated wallet connectivity for user authentication and implemented smart contract logic for token management and transaction validation.
          </p>
          <p><strong>Tech:</strong> Solidity </p>
        </div>
        <div className="project-card">
          <h3>Github-Profile-search</h3>
          <p>
            A React-based web application that allows users to search GitHub profiles and view detailed user information using the GitHub REST API.
          </p>
          <p>
            Key Features:<br/>
            1.Search GitHub users by username<br/>
            2.Display profile details (bio, followers, repos)<br/>
            3.Error handling for invalid users<br/>
            4.Responsive UI<br/>
          </p>
          <p><strong>Tech:</strong> React.js, JavaScript, Github REST API, HTML, CSS </p>
        </div>
        <div className="project-card">
          <h3>AI-Resume-Analyzer</h3>
          <p>
            An AI-powered web application that analyzes resumes against job descriptions to calculate ATS-style match percentage, identify missing skills, and provide actionable improvement suggestions.
          </p>
          <p>
            Key Features:<br/>
            1.Resume upload (PDF)<br/>
            2.Job description comparison<br/>
            3.Match percentage calculation<br/>
            4.Missing skills detection<br/>
            5.Improvement suggestions using AI
          </p>
          <p><strong>Tech:</strong> React.js, Node.js, Express.js, PDF.js, Google Gemini AI, REST APIs </p>
        </div>
      </div>
    
    </section>
  );
};

export default Projects;
