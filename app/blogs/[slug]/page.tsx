// একটা একটা করে নিয়ে আসা

import DisLikeButton from "@/app/ui/DisLikeButton";
import LikeButton from "@/app/ui/LikeButton";

const BlogSlagPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();

  return (
    <div>
      <h2 className="text-4xl">Blog Slug page: {slug}</h2>
      <h3 className="text-2xl text-red-500 font-bold">{post.title}</h3>
      <p className="text-yellow-500">{post.body}</p>

      
      <DisLikeButton blogSlug={slug} />
      <LikeButton blogSlug={slug} />
    </div>
  );
};

export default BlogSlagPage;



// ‍সকল পোস্ট এক সাথে নিয়ে আসা
// import DisLikeButton from "@/app/ui/DisLikeButton";
// import LikeButton from "@/app/ui/LikeButton";

// const BlogSlagPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
//   const { slug } = await params;

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const postData = await res.json();

//   return (
//     <div>
//       <h2 className="text-4xl">Blog Slug page: {slug}</h2>
//       <p>Blog post length: {postData.length}</p>

//       <ul className="mt-4 space-y-4">
//         {postData.map((post: { id: number; title: string; body: string }) => (
//           <li key={post.id} className="border-b pb-2">
//             <h3 className="text-xl font-semibold">{post.title}</h3>
//             <p className="text-gray-600">{post.body}</p>
//           </li>
//         ))}
//       </ul>

//       <DisLikeButton blogSlug={slug} />
//       <LikeButton blogSlug={slug} />
//     </div>
//   );
// };

// export default BlogSlagPage;