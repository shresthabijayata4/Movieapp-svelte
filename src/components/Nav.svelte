<script>
    import Logo from '/static/svg/logo-YTS.svg';
</script>

<nav class="flex items-center justify-between flex-wrap bg-[#1d1d1d]">
    <div class="flex items-center flex-shrink-0 text-white mr-6 ml-10">
      <img src={Logo} alt="YTS logo" />
    </div>
    <div class="flex justify-center flex-wrap">
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <input
            type="search"
            class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleSearch2"
            placeholder="Quick search "
          />
          <!-- <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-1/5"><i class="fa fa-search"></i></button> -->
        </div>
      </div>
      <div
        class="w-full float-right block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            <span class="text-[#6AC045]">4k</span>
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Trending
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Browse Movies
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Login
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            |
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  </nav>