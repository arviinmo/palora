export default function Custom500() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#ffffff]">
      <h1 className="font-extrabold tracking-widest text-black text-9xl">
        500
      </h1>
      <div className="bg-[#FF6A3D] font-Poppins text-white px-2 mt-6 text-xl rounded absolute">
        Server-side error occurred
      </div>
    </main>
  );
}
