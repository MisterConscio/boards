import { useEffect, useState } from "react";

import { PostInfo } from "../pages/ThreadPage";

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

const Post = ({
  name = "Anonymous",
  tim,
  no,
  now,
  com,
  tn_w,
  tn_h,
  w,
  h,
}: PostInfo) => {
  const [fullImg, setFullImg] = useState(false);
  const [replyCount, setReplyCount] = useState<string[]>([]);

  useEffect(() => {
    const count = getCurrentPostReferences(no);
    setReplyCount(count);
  }, []);

  const blacklinks = replyCount.map((reply, index) => (
    <a href={`#${reply}`} key={index} className="post-info-backlink-circle"></a>
  ));

  const handelImgClick = () => {
    setFullImg(!fullImg);
  };

  return (
    <div className="post" key={no} id={`p${no}`}>
      <div className="post-info">
        <span className="post-info-name">{name}</span>
        <span className="post-info-date">{now}</span>
        <span className="post-info-number">No. {no}</span>
        <div className="post-info-backlink">{blacklinks}</div>
      </div>
      <div className={`post-message ${fullImg && "post-message-full"}`}>
        {tim && (
          <a onClick={() => handelImgClick()} className="post-message-img">
            {fullImg ? (
              <img
                src={`https://placehold.it/${w}x${h}`}
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
          dangerouslySetInnerHTML={{ __html: com }}
        />
      </div>
    </div>
  );
};

export default Post;
