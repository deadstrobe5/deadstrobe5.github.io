'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpeg" alt="Afonso Ribeiro" width={350} height={200} priority />
        </Link>
        <header>
          <h2>Afonso Ribeiro</h2>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hey there, I&apos;m Afonso <br />
          I turn coffee into code 👨🏻‍💻 <br />
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Afonso Ribeiro <Link href="/">deadstrobe5.github.io</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
