const IconButton = (props) => {
  const { onClick, icon } = props;

  return (
    <button
      className="text-white"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
