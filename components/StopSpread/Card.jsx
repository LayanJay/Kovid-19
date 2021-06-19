const Card = ({ item }) => {
  const { title, image, description } = item;
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray border-opacity-30 rounded-2xl max-w-xs p-6 sm:p-5 md:p-4 mb-5 mx-auto">
      <img
        className="w-28 sm:w-36 md:w-40 mb-8"
        src={image}
        alt={title}
        loading="lazy"
        width={200}
        height={200}
      />
      <h3 className="font-semibold text-center text-xl sm:text-2xl mb-3">
        {title}
      </h3>
      <p className="text-gray font-medium text-center md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Card;
