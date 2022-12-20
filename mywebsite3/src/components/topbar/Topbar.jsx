import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">afds</a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>+44 924 12 74</span>
            <div className="itemContainer">
              <MailIcon className="icon"/>
              <span>hi@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar