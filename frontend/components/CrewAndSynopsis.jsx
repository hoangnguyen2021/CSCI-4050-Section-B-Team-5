const CrewAndSynopsis = ({ movieMeta }) => {
  return (
    <>
      <p className="text-on-primary text-md font-light">
        <span className="font-semibold">Producer: </span>
        <span>{movieMeta.producer}</span>
      </p>
      <p className="text-on-primary text-md font-light">
        <span className="font-semibold">Director: </span>
        <span>{movieMeta.director}</span>
      </p>
      <p className="text-on-primary text-md font-light">
        <span className="font-semibold">Cast: </span>
        <span>{movieMeta.movie_cast}</span>
      </p>
      <div>
        <p className="text-on-primary text-md font-semibold">Synopsis: </p>
        <p className="text-on-primary text-md font-light">
          {movieMeta.synopsis}
        </p>
      </div>
    </>
  );
};

export default CrewAndSynopsis;
