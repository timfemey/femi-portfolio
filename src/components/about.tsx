interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return <>
  <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating elegant and effective solutions to
            complex problems. I have a strong foundation in software development, with a focus on web
            technologies on frontend & backend such as JavaScript, Typescript, Nodejs and Golang. I enjoy working on both the front-end and
            back-end of applications, and I am always looking for ways to optimize performance, improve user
            experience, and ensure the highest level of code quality.
          </p>
          <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to
            complex enterprise-level applications. I am experienced in working with a variety of development
            tools and frameworks, including React, Preact, Next js, and backend frameworks. I am always eager
            to learn and explore new technologies, and I am constantly seeking out opportunities to improve
            my skills and knowledge.</p>
        </div>
        <div className="about-img">
          <img src='https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  </>;
};

export default About;
