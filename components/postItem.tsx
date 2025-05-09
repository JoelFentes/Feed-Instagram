// components/PostItem.tsx

import HeaderPost from "@/components/headerPost";
import BottomPost from "@/components/bottomPost";
import Post from "@/classes/Post";

interface PostItemProps {
  post: Post; 
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="w-full bg-white shadow-md rounded-md overflow-hidden">
      <HeaderPost
        username={post.username}
        avatarUrl={post.avatarUrl} // Usando o método avatarUrl da classe Post
        isSuggested={post.isSuggested}
      />
      <div className="flex justify-center">
        <img src={post.imageUrl} alt="Post Image" className="w-full h-96 object-cover" /> {/* Usando o método imageUrl da classe Post */}
      </div>
      <BottomPost
        username={post.username}
        numberOfLikes={post.numberOfLikes}
        numberOfComments={post.numberOfComments}
        numberOfShares={post.numberOfShares}
        description={post.description}
      />
    </div>
  );
}
