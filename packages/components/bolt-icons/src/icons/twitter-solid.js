import { h } from '@bolt/core';

export const TwitterSolid = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg width={size} height={size} {...otherProps} viewBox="0 0 24 28">
      <path
        d="M20 9.531a6.887 6.887 0 0 1-1.891.531 3.313 3.313 0 0 0 1.453-1.828 6.547 6.547 0 0 1-2.094.797A3.253 3.253 0 0 0 15.077 8a3.28 3.28 0 0 0-3.281 3.281c0 .25.016.516.078.75a9.324 9.324 0 0 1-6.781-3.437 3.33 3.33 0 0 0-.453 1.656c0 1.141.531 2.141 1.422 2.734-.547-.016-1.062-.172-1.563-.406v.031c0 1.594 1.203 2.922 2.703 3.219-.281.078-.5.125-.797.125-.203 0-.406-.031-.609-.063a3.3 3.3 0 0 0 3.063 2.281A6.607 6.607 0 0 1 4 19.53a9.351 9.351 0 0 0 5.031 1.469c6.031 0 9.344-5 9.344-9.344 0-.141 0-.281-.016-.422A6.31 6.31 0 0 0 20 9.53zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15A4.502 4.502 0 0 1 0 21.5v-15C0 4.016 2.016 2 4.5 2h15C21.984 2 24 4.016 24 6.5z"
        fill={bgColor}
      />
    </svg>
  );
};
