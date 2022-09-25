const RoundedImageView = ({ src }) => {
  return (
    <img
      class="w-24 h-24 rounded-full border-2 border-white"
      src={src}
      alt="Movie poster"
    />
  );
};

export default RoundedImageView;
