interface IAppProps {}

const Footer: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Femi Portfolio</p>
        <div className="social_icons">
          
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
    </>
  );
};

export default Footer;
