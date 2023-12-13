import React from 'react'

type StyledImageProps = {
  src: string
  alt: string
  className?: string
};

const StyledImage = ({ src, alt, className = "" }: StyledImageProps) => (
  <img src={src} alt={alt} className={`border-2 border-black shadow-lg ${className}`} />
);

export default StyledImage
