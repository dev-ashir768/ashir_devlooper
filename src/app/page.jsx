import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-mainBackground h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-6xl font-medium">Under Maintenance</h1>
      <p className="text-white text-xl font-normal max-w-[466px] text-center mt-5">
        We apologize for the inconvenience. My website is currently undergoing
        scheduled maintenance. Please check back soon.
      </p>
    </main>
  );
}
