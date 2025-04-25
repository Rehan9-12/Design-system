import React from 'react';
import { typography } from './TypographyTokens';

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Caption: React.FC<CaptionProps> = ({ children, className = '' }) => {
  const styles = typography.caption;

  return (
    <span
      className={className}
      style={{
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        lineHeight: styles.lineHeight,
      }}
    >
      {children}
    </span>
  );
};
