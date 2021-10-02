const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <nav className="button__nav">
        <button className="button__nav-item  button__nav--prev">
          <svg height="9" width="14">
            <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path>
          </svg>
        </button>
        <button className="button__nav-item button__nav--next">
          <svg height="9" width="14">
            <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"></path>
          </svg>
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
