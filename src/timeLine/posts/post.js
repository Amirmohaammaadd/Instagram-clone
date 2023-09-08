import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import post_1 from "../../img/post-1.jpg";
// import post_2 from "../../img/post-2.jpeg";
// import post_3 from "../../img/post-3.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./post.css";

const Post = ({logo}) => {
  //  user , postImage , likes , timespamp
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuth">
          <Avatar className="post__avatar">A</Avatar>
          amirali_.
          <span className="post__span">12h</span>
          {/* <Avatar>{user.charAt(0).toUpperCase()}</Avatar>{user}. <span>{timespamp}</span> */}
        </div>

        <MoreHorizIcon />
      </div>
      <div className="post__img">
        <img src={logo} alt="none" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__IconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__IconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        liked by 22 people.
      </div>
    </div>
  );
};

export default Post;
