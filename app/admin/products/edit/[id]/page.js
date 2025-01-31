import EditProductForm from "@/app/components/features/Products/EditProductForm";

export default async function Page({ params }) {
  const { id } = await params;
  return <EditProductForm id={id} />;
}
