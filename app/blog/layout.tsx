'use client';

import PageWrapper from '../components/PageWrapper';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>;
}
