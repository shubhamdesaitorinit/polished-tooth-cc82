const Header = () => {
  return (
    <header>
      <div
        class={
          "z-50 h-14 w-full flex p-2 items-center justify-between bg-gray-800 fixed top-0  "
        }
      >
        <div class="w-full  flex items-center justify-between gap-3 ">
          <h1 class="p-0 text-white decoration-white">Music</h1>
          <div class="flex items-center gap-2">
            <div class="">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                  required=""
                />
              </div>
            </div>
            <button class="flex-shrink-0 h-9 mt-2 text-xs text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded-lg sm:mt-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
