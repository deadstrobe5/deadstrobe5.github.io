import React from 'react';

import { render, screen } from '@testing-library/react';

import Cell from '../../Projects/Cell';

describe('Cell', () => {
  const mockProject = {
    title: 'Test Project',
    desc: 'This is a test project description',
    link: 'https://example.com',
  };

  it('renders project title with link', () => {
    render(<Cell data={mockProject} />);
    const titleLink = screen.getByRole('link', { name: mockProject.title });
    expect(titleLink).toHaveAttribute('href', mockProject.link);
  });

  it('renders project description', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText(mockProject.desc)).toBeInTheDocument();
  });

  it('renders project without link when link is not provided', () => {
    const projectWithoutLink = { ...mockProject, link: undefined };
    render(<Cell data={projectWithoutLink} />);
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
