import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="linktab flex space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about"  className="text-white">
            About
          </Link>
          <Link href="/services" className="text-white">
            Services
          </Link>
          
        </div>
        <div className=" searchbox relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon absolute right-0 top-0 mt-2 mr-3 h-4 w-4 text-gray-500"
          />
        </div>
        <div className="space-x-4">
        <Link href="/testimonials" className="text-white"T>
            Testimonials
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/signup" className="text-white">
            Sign Up
          </Link>
          <Link href="/signin" className="text-white">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;