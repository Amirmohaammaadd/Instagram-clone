import { useState } from "react";
import Suggestion from "./Suggestion";
import "./Timeline.css";
import Post from "./posts/post";
import post_3 from "../img/post-3.jpg";
import post_1 from "../img/post-1.jpg";
import post_2 from "../img/post-2.jpeg";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "radin_am",
      postImg: "../img/post-1.jpg",
      likes: 12,
      timespamp: "2d",
    },
    {
      user: "kimia_21",
      postImg: "../img/post-2.jpg",
      likes: 36,
      timespamp: "12h",
    },
    {
      user: "ali_mk",
      postImg: "../img/post-3.jpg",
      likes: 53,
      timespamp: "1d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          <Post logo={post_3} />
          <Post logo={post_2} />
          <Post logo={post_1} />
          
          {/* {posts.map((post) => (
            <Post
              user={post.user}
              postImg={post.postImg}
              likes={post.likes}
              timespamp={post.timespamp}
            />
          ))} */}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestion />
      </div>
    </div>
  );
};

export default Timeline;
