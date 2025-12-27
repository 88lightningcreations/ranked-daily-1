import BlogPostsList from "@/components/BlogPostsList";
import "./list.css"; // Import the new stylesheet

export default function BlogPage() {
  return (
    <div className="blog-list-container">
      <h1 className="blog-list-header">Our Blog</h1>
      <BlogPostsList />
    </div>
  );
}
