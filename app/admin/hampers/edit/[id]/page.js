import EditHamersForm from "@/app/components/features/hampers/EditHampersForm";

export default async function Page({ params }) {
  const { id } = await params;
  return <EditHamersForm id={id} />;
}
