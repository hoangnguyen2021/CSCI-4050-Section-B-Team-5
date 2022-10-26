import { classNames } from "../utils/utils";

const Heading = ({ text, textCenter = false }) => {
  return (
    <div className="px-8 py-8">
      <h2
        className={classNames(
          textCenter ? "text-center" : "",
          "text-4xl text-on-primary font-extrabold"
        )}
      >
        {text}
      </h2>
    </div>
  );
};

export default Heading;
