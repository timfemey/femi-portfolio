interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <>
      <div className="hero-container">
        <img
          src="https://i.ibb.co/X5SQHVS/IMG-20230916-102429-495.jpg"
          className="profile-img"
          width={300}
          height={300}
          alt="Femi's personal headshot"
        />
        <div className="hero-text">
          <h1>Hey, I&apos;m Femi 👋</h1>
          <p>
            I&apos;m a software developer based in Edo, Nigeria. I specialize in
            building exceptional websites, building scalable servers and
            developing robust system architecture for applications, and
            everything in between.
          </p>
          <div className="social-icons">
            <a
              href="mailto:isholaobafemi@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              href="https://github.com/timfemey"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/obafemi-ishola/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Hero;
