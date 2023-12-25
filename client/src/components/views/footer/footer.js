
const Footer = () => {
  
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }

    return (
      <footer className='footer mt-auto py-3'>
        <p className='text-center text-secondary'>Copyright &copy; Choco-Shop {getDate()}</p>
      </footer>
    );
};

export default Footer;