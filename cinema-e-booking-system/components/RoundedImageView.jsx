import Image from "next/image";

const RoundedImageView = ({ src }) => {
  return (
    <Image
      class="w-24 h-24 rounded-full border-2 border-white"
      src={src}
      alt="Movie poster"
    />
  );
};

export default RoundedImageView;
