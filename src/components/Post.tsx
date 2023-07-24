import { useEffect, useState } from "react";
import "../styles/Post.css";

type Props = {
  name?: string;
  image?: number;
  ext: string;
  number: number;
  date: string;
  comment: string;
  tn_w: number;
  tn_h: number;
  width: number;
  height: number;
};

const Post = ({
  name = "Anonymous",
  image,
  ext,
  number,
  date,
  comment,
  tn_w,
  tn_h,
  width,
  height,
}: Props) => {
  const [fullImg, setFullImg] = useState(false);
  // const [parsedComment, setParsedComment] = useState<Document | null>(null);

  // useEffect(() => {
  //   function parseHTML(htmlString: string): void {
  //     const parser = new DOMParser();
  //     const doc = parser.parseFromString(
  //       `<div>${htmlString}</div>`,
  //       "text/html"
  //     );
  //     setParsedComment(doc);
  //   }

  //   parseHTML(comment);
  // }, []);

  const handelImgClick = () => {
    setFullImg(!fullImg);
  };

  return (
    <div className="post" key={number} id={`p${number.toString()}`}>
      <div className="post-info">
        <span className="post-info-name">{name}</span>
        <span className="post-info-date">{date}</span>
        <span className="post-info-number">No. {number.toString()}</span>
        <div className="post-info-backlink">
          <div className="post-info-backlink-circle"></div>
          <div className="post-info-backlink-circle"></div>
          <div className="post-info-backlink-circle"></div>
          <div className="post-info-backlink-circle"></div>
        </div>
      </div>
      <div className={`post-message ${fullImg && "post-message-full"}`}>
        {image && (
          <a onClick={() => handelImgClick()} className="post-message-img">
            {fullImg ? (
              <img
                src={`https://placehold.it/${width}x${height}`}
                alt="thumb"
                loading="lazy"
              />
            ) : (
              <img
                src={`https://placehold.it/${tn_w}x${tn_h}`}
                alt="thumb"
                loading="lazy"
              />
            )}
          </a>
        )}
        <div
          className="post-message-reply"
          dangerouslySetInnerHTML={{ __html: comment }}
        />
      </div>
    </div>
  );
};

export default Post;
