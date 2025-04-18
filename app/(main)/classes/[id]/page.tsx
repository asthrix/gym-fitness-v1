import { notFound } from "next/navigation";
import { ClassDetailContent } from "@/components/sections/ClassDetailContent";
import { classesData } from "@/data/classes";

// Convert to an async component that returns params as a Promise
export default async function ClassDetailPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const unwrappedParams = await params;

   const gymClass = classesData.find((c) => c.id === unwrappedParams.id);

   if (!gymClass) {
      notFound();
   }

   return <ClassDetailContent gymClass={gymClass} />;
}
