import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Nazarudin Latif
        </h1>
        <p className="text-gray-600 mb-6">Semoga TMA Semakin Jaya Jaya Jaya.</p>
        <Link
          href="/joke"
          className="inline-block px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-full "
        >
          Joke of the Day
        </Link>
      </div>
    </div>
  );
}
