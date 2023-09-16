interface IContactUSProps {
}

const ContactUS: React.FunctionComponent<IContactUSProps> = (props) => {
  return <>
     <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>If you want us to work together, have any questions or want me to work on a project, my inbox is always open. Cheers!</p>
      <a href="mailto:isholaobafemi@gmail.com" className='cta-btn'>Say Hello</a>
    </div>
  </>;
};

export default ContactUS;
