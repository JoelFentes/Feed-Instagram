// pages/index.tsx
import PostItem from "@/components/postItem";
import Post from "@/classes/Post";

export default function Home() {
  const posts: Post[] = [];

  for (let i = 1; i <= 20; i++) {
    const post = new Post(
      `fulano ${i}`,
      i,
      i,
      `${i * 1000} mil`,
      `${i * 10}`,
      `${i * 200} mil`,
      `Esse é o post número ${i}`,
      i % 2 === 0
    );
    posts.push(post);
  }

  return (
    <div className="w-screen h-screen bg-neutral-500 flex justify-center items-center">
      <div className="w-96 h-full space-y-4 py-4 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
}