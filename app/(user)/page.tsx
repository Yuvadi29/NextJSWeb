import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from "../../components/PreviewBlogList";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";

// This will fetch all the blog posts created till date
const query = groq`
*[_type == 'post'] {
  ...,
  author ->,
  categories[] ->
} | order(_createdAt desc)
`

const HomePage = async () => {
  if (previewData()) {
    return <div>
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#151725]">
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query}/>
      </PreviewSuspense>
    </div>
  }

  const posts = await client.fetch(query);
  return (
    <div>
      <BlogList posts = {posts}/>
      {/* <h1>Not in Preview Mode</h1> */}
    </div>
  )
}
export default HomePage;