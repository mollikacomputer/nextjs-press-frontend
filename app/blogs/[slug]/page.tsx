import DisLikeButton from "@/app/ui/DisLikeButton";
import LikeButton from "@/app/ui/LikeButton";
import Link from "next/link";


const BlogSlagPage = async({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;
  return (
    <div>
      <h2 className="text-4xl">Blog Slag page: {slug}</h2>
      
      <DisLikeButton blogSlug={slug} />
      
      <LikeButton blogSlug={slug} />
    </div>
  )
}

export default BlogSlagPage
