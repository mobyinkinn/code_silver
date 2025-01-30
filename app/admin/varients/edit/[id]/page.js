import EditVarientForm from "@/app/components/features/varients/EditVarientForm";

export default async function Page({ params }) {
  const { id } = await params;
  return <EditVarientForm id={id} />;
}
