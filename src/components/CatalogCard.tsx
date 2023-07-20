import { Link } from "react-router-dom";
import "../styles/ThreadCard.css";

type Props = {
  subject: string;
  commentary: string;
  replies: number;
  images: number;
  id: number;
  thumbWidth: number;
  thumbHeight: number;
};

const CatalogCard = ({
  subject,
  commentary,
  replies,
  images,
  id,
  thumbWidth,
  thumbHeight,
}: Props) => {
  //function randomImageRes() {
  //  let randWith = Math.floor(Math.random() * 150 + 100);
  //  let randHeight = Math.floor(Math.random() * 100 + 150);

  //  return `${randWith}x${randHeight}`;
  //}

  return (
    <div className="thread-card">
      <div className="thread-card-thumb">
        <Link to={`/thread/${id}`} state={id}>
          <img
            src={`https://placehold.co/${thumbWidth}x${thumbHeight}/jpg`}
            width={thumbWidth}
            height={thumbHeight}
            alt="Thumbnail"
            loading="lazy"
          />
        </Link>
      </div>
      <span className="thread-card-status">
        R: <strong>{replies.toString()}</strong> / I:{" "}
        <strong>{images.toString()}</strong>
      </span>
      <h4>{subject}</h4>
      <p dangerouslySetInnerHTML={{ __html: commentary }} />
    </div>
  );
};

export default CatalogCard;
