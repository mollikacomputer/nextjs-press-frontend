

const BlogSlagPage = async({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;
  return (
    <div>
      <h2 className="text-4xl">Blog Slag page: {slug}</h2>
    </div>
  )
}

export default BlogSlagPage
