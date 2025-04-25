import React from 'react';
import { typography } from './TypographyTokens';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => {
  const styles = typography.paragraph;

  return (
    <p
      className={className}
      style={{
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        lineHeight: styles.lineHeight,
      }}
    >
      {children}
    </p>
  );
};
