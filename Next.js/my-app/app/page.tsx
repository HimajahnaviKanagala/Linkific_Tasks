import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Next.js🚀</h1>

      <p className="text-gray-600">
        This is modern full-stack React framework.
      </p>

      <Image src="/vercel.svg" alt="logo" width={120} height={120} />
      <Counter />
    </div>
  );
}
