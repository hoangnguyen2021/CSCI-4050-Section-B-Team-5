const HPMovieInfo = ({ durationInMin, rating, releasedDate }) => {
  const hours = Math.floor(durationInMin / 60);
  const minutes = durationInMin % 60;

  return (
    <div className="text-xl font-bold text-on-primary">
      <div className="text-lg font-light text-on-primary text-center">
        {hours} HRS {minutes} MIN | {rating}
      </div>
      <div className="text-lg font-light text-on-primary text-center">
        Released {releasedDate}
      </div>
    </div>
  );
};

export default HPMovieInfo;
