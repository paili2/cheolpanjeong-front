"use client";

import Logo from "@/src/common/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiLogOut,
  FiMenu,
  FiSettings,
  FiTag,
  FiUsers,
} from "react-icons/fi";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const AdminSidebar = () => {
  const navItems: NavItem[] = [
    { label: "대시보드", href: "/admin", icon: <FiHome size={20} /> },
    { label: "메뉴 관리", href: "/admin/menus", icon: <FiMenu size={20} /> },
    { label: "이벤트 관리", href: "/admin/events", icon: <FiTag size={20} /> },
    { label: "유저 관리", href: "/admin/users", icon: <FiUsers size={20} /> },
    { label: "설정", href: "/admin/settings", icon: <FiSettings size={20} /> },
  ];

  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-50 w-64 min-h-screen bg-gray-800 text-gray-100 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <Logo className="text-[25px]" />
      </div>

      {/* 네비게이션 링크 */}
      <nav className="mt-6 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-2 mx-2 my-1 rounded-lg 
                transition-colors
                ${
                  isActive
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 로그아웃 버튼 */}
      <div className="mt-auto mb-4">
        <button
          type="button"
          onClick={() => {
            // 로그아웃 로직을 여기서 실행하거나, 추후 함수 연결
            console.log("로그아웃 버튼 클릭됨");
          }}
          className="flex items-center gap-3 w-full px-4 py-2 mx-2 rounded-lg text-gray-300 hover:text-white transition-colors"
        >
          <FiLogOut size={20} />
          <span className="font-medium">로그아웃</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
