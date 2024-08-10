const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-700 py-2 fixed w-full top-0 left-0 z-50 h-20">
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="flex space-x-4">
            <a
              className="hover:bg-gray-800 text-white px-4 py-2 
                              no-underline transition duration-300 
                              bg-transparent hover:bg-gray-700"
              href="/"
            >
              About
            </a>
            <a
              className="hover:bg-gray-800 text-white px-4 py-2 
                              no-underline transition duration-300 
                              bg-transparent hover:bg-gray-700"
              href="#tech"
            >
              Tech
            </a>
            <a
              className="hover:bg-gray-800 text-white px-4 py-2 
                              no-underline transition duration-300 
                              bg-transparent hover:bg-gray-700"
              href="travels"
            >
              Travels
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
