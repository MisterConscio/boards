import { Link } from "react-router-dom";

import { Threads } from "./CatalogList";

import "../styles/ThreadCard.css";

const CatalogCard = ({
  no,
  sub,
  com,
  tn_w,
  tn_h,
  replies,
  images,
}: Threads) => {
  return (
    <div className="thread-card">
      <div className="thread-card-thumb">
        <Link to={`/thread/${no}`} state={no}>
          <img
            src={`https://placehold.co/${tn_w}x${tn_h}/jpg`}
            width={tn_w}
            height={tn_h}
            alt="Thumbnail"
            loading="lazy"
          />
        </Link>
      </div>
      <span className="thread-card-status">
        R: <strong>{replies.toString()}</strong> / I:{" "}
        <strong>{images.toString()}</strong>
      </span>
      <h4 className="thread-card-title">{sub}</h4>
      <p
        className="thread-card-commentary"
        dangerouslySetInnerHTML={{ __html: com }}
      />
    </div>
  );
};

export default CatalogCard;
