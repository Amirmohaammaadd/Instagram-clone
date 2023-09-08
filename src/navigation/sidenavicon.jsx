const SideIcon = ({name , icon}) => {
  return (
    <button className="sidenav__button">
        {icon}
      <span>{name}</span>
    </button>
  );
};

export default SideIcon;
