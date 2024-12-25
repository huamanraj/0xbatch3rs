import Header from "@/components/feed-components/Header";
import WritePost from "@/components/feed-components/WritePost";

export default function Feed() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[275px_1fr_350px] min-h-screen max-w-screen mx-auto p-0 sm:px-4 md:px-8 lg:px-16">
      {/* Main Content - Scrollable */}
      <main className="order-1 md:order-2 min-h-screen overflow-y-auto w-full">
        <Header />
        <WritePost />
        <div className="p-4 bg-green-900 min-h-[200vh]">
          <div className="h-12 w-20 bg-black"></div>
        </div>
      </main>

      {/* Left Sidebar */}
      <aside className="order-2 md:order-1 md:sticky md:top-0 md:h-screen p-4 bg-emerald-900">
        <div className="md:hidden text-white text-lg font-bold mb-2">
          Left Sidebar
        </div>
        {/* Add your left sidebar content here */}
      </aside>

      {/* Right Sidebar */}
      <aside className="order-3 md:sticky md:top-0 md:h-screen p-4">
        <div className="md:hidden text-white text-lg font-bold mb-2">
          Right Sidebar
        </div>
        <div className="bg-gray-700 min-h-52 p-4"></div>
      </aside>
    </div>
  );
}
