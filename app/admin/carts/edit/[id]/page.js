import EditCollectionForm from "@/app/components/features/collections/EditCollectionForm";

export default async function Page({ params }) {
  const { id } = await params;
  return <EditCollectionForm id={id} />;
}
