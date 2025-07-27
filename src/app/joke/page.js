import Link from "next/link";

export default async function Page() {
  const data = await fetch("https://official-joke-api.appspot.com/random_joke");
  const posts = await data.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Joke of the Day</h1>
        <p className="font-medium text-black">{posts.setup}</p>
        <p className="text-blue-700 font-semibold">{posts.punchline}</p>
        <Link
          href="/"
          className="inline-block mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full  "
        >
          Back
        </Link>
      </div>
    </div>
  );
}
