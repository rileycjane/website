const IconButton = ({ label, style, icon, onClick }) => {
  return (
    <button className={style} onClick={onClick}>
      {label}
      <div className="icon">{icon}</div>
    </button>
  );
};

export default IconButton;
