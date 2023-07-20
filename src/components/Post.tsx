import { useState } from "react";
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

  const handelImgClick = () => {
    setFullImg(!fullImg);
  };

  return (
    <div className="post" key={number} id={number.toString()}>
      <div className="post-info">
        <span className="post-info-name">{name}</span>
        <span className="post-info-date">{date}</span>
        <span className="post-info-number">No. {number.toString()}</span>
        {/*
        <div className="post-info-backlink">
          <span>
            <a href="#">&gt;&gt;94731503</a>
          </span>
          <span>
            <a href="#">&gt;&gt;94731503</a>
          </span>
        </div>
        */}
      </div>
      <div className={`post-message ${fullImg && "post-message-full"}`}>
        {image && (
          <a onClick={() => handelImgClick()} className="post-message-img">
            {fullImg ? (
              <img
                src={`https://placehold.it/${width}x${height}`}
                width={width}
                height={height}
                alt="thumb"
                loading="lazy"
              />
            ) : (
              <img
                src={`https://placehold.it/${tn_w}x${tn_h}`}
                width={tn_w}
                height={tn_h}
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
