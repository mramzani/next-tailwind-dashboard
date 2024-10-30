'use client'
import { useState } from 'react'
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import {Header} from "@/components/ui/dashboard/Header";
import SideBar from "@/components/ui/dashboard/SideBar";
import MobileDialog from "@/components/ui/dashboard/MobileDialog";

const navigation = [
  { name: 'داشبورد', href: '/dash', icon: HomeIcon, current: true },
  { name: 'مشتریان', href: '/customers', icon: UsersIcon, current: false },
  { name: 'فایل ها', href: '#', icon: FolderIcon, current: false },
]

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
      <div>
        <MobileDialog sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigations={navigation} />
        <SideBar navigations={navigation} />
        <div className="lg:pr-72">
          <Header setSidebar={setSidebarOpen}/>
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8 text-gray-800">{children}</div>
          </main>
        </div>
      </div>
  );
}
