const RoundedImageView = ({ src }) => {
  return (
    <img
      className="w-24 h-24 rounded-full border-2 border-white object-cover"
      src={src}
      alt="Movie poster"
    />
  );
};

export default RoundedImageView;
