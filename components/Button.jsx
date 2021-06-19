const Button = ({ value, callback }) => {
  const style =
    value === "cases"
      ? `border-blue text-blue hover:bg-blue hover:text-white`
      : value === "recovered"
      ? `border-green text-green hover:bg-green hover:text-white`
      : value === "deaths"
      ? `border-red text-red hover:bg-red hover:text-white`
      : `bg-pink-base hover:bg-pink-dark text-white`;
  return (
    <button
      className={`py-2 w-28 m-1 text-center font-medium border-2 ${style} transition ease-in duration-200 focus:outline-none rounded-lg capitalize`}
      onClick={callback}
    >
      {value}
    </button>
  );
};

export default Button;
