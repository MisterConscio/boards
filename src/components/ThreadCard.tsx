import { Link } from "react-router-dom";
import "../styles/ThreadCard.css";

type Props = {
  subject: string;
  commentary: string;
  replies: number;
  images: number;
};

const ThreadCard = ({ subject, commentary, replies, images }: Props) => {
  function randomImageRes() {
    let randWith = Math.floor(Math.random() * 150 + 100);
    let randHeight = Math.floor(Math.random() * 100 + 150);

    return `${randWith}x${randHeight}`;
  }

  return (
    <div className="thread-card">
      <div className="thread-card-thumb">
        <Link to="/thread">
          <img
            src={`https://placehold.co/${randomImageRes()}`}
            alt="Thumbnail"
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

export default ThreadCard;
