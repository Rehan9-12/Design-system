import React, { JSX } from 'react';
import { typography } from './TypographyTokens';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = typography[`h${level}` as keyof typeof typography] || typography.h2;

  return (
    <Tag className={className}
      style={{
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        lineHeight: styles.lineHeight,
      }}>
      {children}
    </Tag>
  );
};
