import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <small>This is my attempt on making a modern image board</small>
      <ul className="footer-link-list">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
        <li>
          <a href="#">Legal</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
