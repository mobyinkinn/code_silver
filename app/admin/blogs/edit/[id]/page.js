import EditBlogForm from "@/app/components/features/blogs/EditBlogForm";

export default async function Page({ params }) {
  const { id } = await params;
  return <EditBlogForm id={id} />;
}
