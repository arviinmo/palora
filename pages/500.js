export default function Custom500() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#ffffff]">
      <h1 className="text-9xl font-extrabold text-black tracking-widest">
        500
      </h1>
      <div className="bg-[#FF6A3D] text-white px-2 mt-6 text-xl rounded absolute">
        Server-side error occurred
      </div>
    </main>
  );
}
