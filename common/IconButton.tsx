const IconButton = (props : any) => {
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
