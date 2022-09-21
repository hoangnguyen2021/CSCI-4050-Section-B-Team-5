const YoutubeView = ({ src }) => {
  return (
    <iframe
      height="300"
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};

export default YoutubeView;
