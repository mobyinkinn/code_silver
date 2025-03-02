import CreateBuyXGetY from "@/app/components/features/discounts/CreateBuyXGetY";

export default async function ({ params }) {
  const { type } = await params;

  if (type === "buyXGetY") {
    return <CreateBuyXGetY type={type}/>;
  }
  return <div>{type}</div>;
}
