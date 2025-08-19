import React from 'react';

import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{data.link ? <a href={data.link}>{data.title}</a> : data.title}</h3>
      </header>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
