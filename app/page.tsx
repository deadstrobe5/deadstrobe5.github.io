import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description: "Afonso Ribeiro's personal website and portfolio",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Welcome!</Link>
            </h2>
            <p>
              Software Developer & Tech Enthusiast
            </p>
          </div>
        </header>
        <p>
          Welcome to my portfolio site. Feel free to read more <Link href="/about">about me</Link>,
          check out my <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, or{' '}
          <Link href="/contact">contact</Link> me.
        </p>
      </article>
    </PageWrapper>
  );
}