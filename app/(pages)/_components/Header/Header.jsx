import styles from "./Header.module.scss";

export default function Header() {
    return (
      <div classnName="headerContainer">
        <div className="contentContainer">Header</div>
          <div className="logo"></div>
          <div className="buttonsContainer">
            <div className="otherbuttons"></div>
              <div>Home</div>
              <div>About</div>
              <div>Get Involved</div>
              <div>Events</div>
              <div>Programs</div>
              <div>Contact</div>
            <div className="donateButton">Donate</div>
          </div>
      </div>
    );
} // Questions: Images? Proper Font Sizing? 