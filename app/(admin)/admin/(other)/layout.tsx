import AdminHeader from "@/src/components/Admin/AdminHeader";
import AdminSidebar from "@/src/components/Admin/AdminSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Page",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeader></AdminHeader>
      <main className="h-[100%]">{children}</main>
    </>
  );
}
