import { useState } from "react";
import { FaRegHeart, FaHeart, FaRegBookmark } from "react-icons/fa6";
import { PiChatCircleBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";

interface BottomPostProps {
  username: string;
  numberOfLikes: string;
  numberOfComments: string;
  numberOfShares: string;
  description: string;
}

export default function BottomPost({
  username,
  numberOfLikes,
  numberOfComments,
  numberOfShares,
  description,
}: BottomPostProps) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="w-full bg-neutral-100 px-3 pt-2 pb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
              onClick={handleLikeClick}
            >
              {liked ? (
                <FaHeart className="w-5 h-5 text-red-500" /> 
              ) : (
                <FaRegHeart className="w-5 h-5" />
              )}
            </button>
            <span className="text-sm font-semibold text-neutral-800">{numberOfLikes}</span>
          </div>
          <div className="flex items-center gap-1">
            <PiChatCircleBold className="w-5 h-5" />
            <span className="text-sm font-semibold text-neutral-800">{numberOfComments}</span>
          </div>
          <div className="flex items-center gap-1">
            <LuSend className="w-5 h-5" />
            <span className="text-sm font-semibold text-neutral-800">{numberOfShares}</span>
          </div>
        </div>
        <FaRegBookmark className="w-5 h-5" />
      </div>

      <div>
        <span className="text-sm">
          <strong>{username}</strong> {description}
        </span>
      </div>
    </div>
  );
}
