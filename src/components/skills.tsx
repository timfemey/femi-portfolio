interface ISkillsProps {
}

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  return <>
  <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card python">
          <i className="devicon-typescript-plain"></i>
          <p>TypeScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card python">
          <i className="fa-brands fa-react react-icon"></i>
          <p>Preact</p>
        </div>
        <div className="skill-card next">
          <i className="devicon-nextjs-original"></i>
          <p>Next js</p>
        </div>
        <div className="skill-card node">
          <i className="fa-brands fa-node-js node-icon"></i>
          <p>Nodejs</p>
        </div>        
        <div className="skill-card python">
          <i className="devicon-go-original-wordmark"></i>
          <p>Golang</p>
        </div>
        <div className="skill-card html">
          <i className="devicon-git-plain"></i>
          <p>Git</p>
        </div>
        <div className="skill-card next">
          <i className="devicon-github-original"></i>
          <p>Github Actions</p>
        </div>
        <div className="skill-card python">
          <i className="devicon-docker-plain"></i>
          <p>Docker</p>
        </div>
        <div className="skill-card redis">
          <i className="devicon-redis-plain"></i>
          <p>Redis</p>
        </div>
        <div className="skill-card node">
          <i className="fa fa-database"></i>
          <p>Databases</p>
        </div>
        <div className="skill-card html">
          <i className="devicon-firebase-plain"></i>
          <p>Firebase</p>
        </div>
        <div className="skill-card html">
          <i className="devicon-amazonwebservices-original"></i>
          <p>AWS</p>
        </div>
        <div className="skill-card python">
          <i className="devicon-googlecloud-plain"></i>
          <p>Google Cloud</p>
        </div>
        <div className="skill-card node">
          <i className="fa fa-comments"></i>
          <p>Messaging Queues/Systems</p>
        </div>
        <div className="skill-card next">
          <i className="fa fa-server"></i>
          <p>Systems Architecture</p>
        </div>
      </div>
    </div>
  </>;
};

export default Skills;
