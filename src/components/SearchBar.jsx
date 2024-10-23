export default function SearchBar({text, handleChangeText}) {
  return (
    <>
      <div className="bg-slate-700 h-16 flex justify-center items-center px-8 py-12 w-full">
        <form className="lg:w-1/3 sm:w-1/2">
          <div className="w-full">
            <div className="flex space-x-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-white text-lg font-semibold">
                Please enter something
              </p>
            </div>
            <div className="flex h-8 space-x-4 bg-re">
              <div className="flex rounded-md overflow-hidden w-full">
                <input
                  type="text"
                  className="w-full rounded-md rounded-r-none" placeholder="Search" required= "" value={text} onChange={(e) => handleChangeText(e.target.value)}
                />
              </div>
              <button className="bg-white px-4 text-lg font-semibold rounded-md">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
