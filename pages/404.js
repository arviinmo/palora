export default function Custom404() {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-white
  "
    >
      <div className="px-40 py-20 bg-white rounded-md">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <a
            href="./"
            className="px-6 py-2 text-sm rounded-lg font-semibold text-blue-800 bg-blue-100"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
