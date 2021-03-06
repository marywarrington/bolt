import { h } from '@bolt/core';

export const Industries = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg width={size} height={size} {...otherProps} viewBox="0 0 32 32">
      <path
        d="M8 0v6H0v26h32V6h-8V0H8zm2 6V2h12v28h-2v-6h-8v6h-2V6zm14 24h6V8h-6v22zM2 30h6V8H2v22zm12 0h4v-4h-4v4zM12 8h8V6h-8v2zm14 6h2v-2h-2v2zm-14 0h8v-2h-8v2zm-8 0h2v-2H4v2zm22 6h2v-2h-2v2zm-14 0h8v-2h-8v2zm-8 0h2v-2H4v2zm22 6h2v-2h-2v2zM4 26h2v-2H4v2z"
        fill={bgColor}
        fill-rule="evenodd"
      />
    </svg>
  );
};
