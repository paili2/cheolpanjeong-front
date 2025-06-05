import AdminSidebar from "@/src/components/Admin/AdminSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AdminDashboard",
  description: "AdminDashboard Page",
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSidebar></AdminSidebar>
      <main className="h-[100%]">{children}</main>
    </>
  );
}
