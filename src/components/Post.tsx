import "../styles/Post.css";

type Props = {
  name?: string;
  image?: string;
  number: number;
  date: string;
  comment: string;
};

const Post = ({ name = "Anonymous", image, number, date, comment }: Props) => {
  return (
    <div className="post" key={number}>
      <div className="post-info">
        <span className="post-info-name">{name}</span>
        <span className="post-info-date">{date}</span>
        <span className="post-info-number">No. {number.toString()}</span>
        <div className="post-info-backlink">
          <span>
            <a href="#">&gt;&gt;94731503</a>
          </span>
          <span>
            <a href="#">&gt;&gt;94731503</a>
          </span>
        </div>
      </div>
      <div className="post-message">
        {image && (
          <div className="post-message-img">
            <img src={image} alt="thumb" />
          </div>
        )}
        <div className="post-message-reply">
          <div dangerouslySetInnerHTML={{ __html: comment }} />
        </div>
      </div>
    </div>
  );
};

export default Post;
