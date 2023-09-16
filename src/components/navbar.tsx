import Link from "next/link";

interface IAppProps {}

const Navbar: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link href="/">Femi&apos;s Portfolio</Link>
        </div>
        
          
          <a href="https://drive.google.com/file/d/1-gmQ2TneTzC3_uiTomABlGxkFKgNIpjh/view?usp=drivesdk" className="cta-btn">
            Resume
          </a>
        </div>
      
    </>
  );
};

export default Navbar;
