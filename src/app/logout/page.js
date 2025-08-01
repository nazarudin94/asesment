"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Hapus token
    router.push("/login"); // Kembali ke halaman login
  };

  return (
    <div>
      <h1>Selamat datang!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
