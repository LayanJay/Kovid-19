import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto font-primary flex justify-between items-center py-4 px-4 sm:px-8">
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            width={200}
            height={70}
            placeholder="blur"
            alt="logo"
          />
        </a>
      </Link>
      <Link href="/be-inform">
        <a className="text-xl sm:text-2xl font-semibold text-gray hover:text-pink-base transition ease-in">
          .Be Inform
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
