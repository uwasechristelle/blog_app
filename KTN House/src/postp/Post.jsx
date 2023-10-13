import "./Post.css";
import pic from "../assets/girl.jpg";
import photo from "../assets/laptop.jpg";
import profile2 from "../assets/chris.jpg";
import profile3 from "../assets/elice.jpg";
import orange from "../assets/orange.jpg";
import PostCard from "../components/PostCard";
import UniqueCard from "../components/UniqueCard";

const Posts = [
  {
    title:
      "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    background:
      "https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    likes: 132,
    comment: 44,
    views: 132,
  },
  {
    title:
      "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.",
    profile:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    background:
      "https://images.unsplash.com/photo-1617074064870-7210b4059fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    likes: 132,
    comment: 44,
    views: 132,
  },
  {
    title:
      "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.",
    profile:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    background:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    likes: 133,
    comment: 44,
    views: 132,
  },
  {
    title:
      "Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good. ",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    background:
      "https://images.unsplash.com/photo-1617074064870-7210b4059fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    likes: 132,
    comment: 44,
    views: 132,
  },
];

export default function Post() {
  return (
    <>
      <div className="body">
        {Posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            profile={post.profile}
            bg={post.background}
            likes={post.likes}
            comment={post.comment}
            views={post.views}
          />
        ))}
        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <UniqueCard />
        <PostCard /> */}
      </div>
    </>
  );
}
