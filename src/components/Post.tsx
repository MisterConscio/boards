import { useEffect, useState } from "react";
import "../styles/Post.css";

const getCurrentPostReferences = (currentId: number): string[] => {
  const postContainer = document.body.querySelectorAll("div.post");
  const postIds: string[] = [];

  postContainer.forEach((postItem) => {
    const anchorTags = postItem.querySelectorAll("a.quotelink");

    for (const anchor of anchorTags) {
      if (anchor.textContent === `>>${currentId}`) {
        const postId = postItem.id;
        if (postId) {
          postIds.push(postId);
        }
      }
    }
  });
  return postIds;
};

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
  const [replyCount, setReplyCount] = useState<string[]>([]);

  useEffect(() => {
    const count = getCurrentPostReferences(number);
    setReplyCount(count);
  }, []);

  const blacklinks = replyCount.map((reply, index) => (
    <a href={`#${reply}`} key={index} className="post-info-backlink-circle"></a>
  ));

  const handelImgClick = () => {
    setFullImg(!fullImg);
  };

  return (
    <div className="post" key={number} id={`p${number}`}>
      <div className="post-info">
        <span className="post-info-name">{name}</span>
        <span className="post-info-date">{date}</span>
        <span className="post-info-number">No. {number}</span>
        <div className="post-info-backlink">{blacklinks}</div>
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
