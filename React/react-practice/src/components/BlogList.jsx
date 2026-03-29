import posts from "../data/posts";
import BlogPost from "./BlogPost";
import Card from "./Card";

function BlogList() {
  return (
    <>
      <Card>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <BlogPost key={post.id} title={post.title} author={post.author} />
        ))}
      </Card>
    </>
  );
}
export default BlogList;
