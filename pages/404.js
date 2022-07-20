export default function Custom404() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#ffffff]">
      <h1 className="font-extrabold tracking-widest text-black text-9xl">
        404
      </h1>
      <div className="bg-[#FF6A3D] text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a
          href="./"
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#ffffff] border border-current">
            <router-link>Go Home</router-link>
          </span>
        </a>
      </button>
    </main>
  );
}
