import { getAllPosts } from "@/lib/markdown"
import EditPostClient from "./edit-client"

export const dynamic = "force-static"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function EditPostPage({ params }: { params: { slug: string } }) {
  return <EditPostClient params={params} />
}
