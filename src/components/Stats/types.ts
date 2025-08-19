import React from 'react';

export interface StatData {
  label: string;
  key?: string;
  value?: string | number | React.ReactElement;
  link?: string;
  format?: (x: unknown) => string;
}
