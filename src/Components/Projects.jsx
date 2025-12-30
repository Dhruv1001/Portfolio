

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
      </div>
    
    </section>
  );
};

export default Projects;
