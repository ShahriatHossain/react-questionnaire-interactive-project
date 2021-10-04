import ButtonNavNext from "../UI/ButtonNav/ButtonNavNext";
import ButtonNavPrev from "../UI/ButtonNav/ButtonNavPrev";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <nav className="button__nav">
        <ButtonNavNext></ButtonNavNext>
        <ButtonNavPrev></ButtonNavPrev>
      </nav>
    </footer>
  );
};

export default Footer;
