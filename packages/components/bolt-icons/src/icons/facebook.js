// import { Preact, h } from '@bolt/core';
const Facebook = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width="16" height="28" viewBox="0 0 16 28" {...otherProps}>
      <title>facebook</title>
      <path
        d="M14.984.187v4.125h-2.453c-1.922 0-2.281.922-2.281 2.25v2.953h4.578l-.609 4.625H10.25v11.859H5.469V14.14H1.485V9.515h3.984V6.109C5.469 2.156 7.891 0 11.422 0c1.687 0 3.141.125 3.563.187z"
        fill="currentColor"
      />
    </svg>
  );
};
export default Facebook;