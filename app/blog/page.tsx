import BlogPostsList from "@/components/BlogPostsList";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <BlogPostsList />
    </div>
  );
}
