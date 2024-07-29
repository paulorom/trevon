import Link from 'next/link';
import Image from "next/image";

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-9">
      <p className="text-2xl dark:text-white text-center">
        <Link legacyBehavior href="/">
          <a>
            <Image width="172" height="32" alt={name} src="/logo-big.png" className="text-center mb-12" />
          </a>
        </Link>
      </p>
    </header>
  );
}
