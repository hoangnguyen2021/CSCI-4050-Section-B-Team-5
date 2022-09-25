const BackgroundOverlay = ({ src, opacity }) => {
  return (
    <>
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-background bg-opacity-${opacity}`}
      />
    </>
  );
};

export default BackgroundOverlay;
