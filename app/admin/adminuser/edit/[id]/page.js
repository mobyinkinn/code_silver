import EditAdminForm from "@/app/components/features/admin/EditAdminForm";

export default async function Page({ params }) {
  const { id } = await params;
  return <EditAdminForm id={id} />;
}
