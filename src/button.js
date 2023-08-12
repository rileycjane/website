import { Link } from "react-router-dom";

const IconButton = ({ label, style, icon, onClick }) => {
  return (
    <Link to={onClick}>
      <button className={style}>
        {label}
        <div className="icon">{icon}</div>
      </button>
    </Link>
  );
};

export default IconButton;
