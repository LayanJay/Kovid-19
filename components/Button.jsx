const Button = ({ value, callback }) => {
  const style =
    value === "cases"
      ? `border-blue border-2 border-b-4 text-blue hover:bg-blue hover:text-white`
      : value === "recovered"
      ? `border-green border-2 border-b-4 text-green hover:bg-green hover:text-white`
      : value === "deaths"
      ? `border-red border-2 border-b-4 text-red hover:bg-red hover:text-white`
      : `bg-pink-base hover:bg-pink-dark text-white`;
  return (
    <button
      className={`py-2 w-28 mx-2 text-center font-medium ${style} transition ease-in duration-200 focus:outline-none rounded-lg shadow-lg capitalize`}
      onClick={callback}
    >
      {value}
    </button>
  );
};

export default Button;
