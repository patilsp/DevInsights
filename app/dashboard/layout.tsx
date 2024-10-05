import Sidebar from '@/components/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}