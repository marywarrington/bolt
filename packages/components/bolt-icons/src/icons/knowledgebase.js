import { h } from '@bolt/core';

export const Knowledgebase = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg
      width={size}
      height={size}
      {...otherProps}
      viewBox="0 0 32 32"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M.943 2h7.114c.52 0 .943.442.943.989V29.01c0 .547-.422.989-.943.989H.943C.423 30 0 29.558 0 29.011V2.99C0 2.442.422 2 .943 2zM2 28.059h5v-2H2v2zm0-22.06h5v-2H2v2zM2 24h5V8H2v16zm8.943-22h7.114c.52 0 .943.442.943.989V29.01c0 .547-.422.989-.943.989h-7.114c-.52 0-.943-.442-.943-.989V2.99c0-.547.422-.989.943-.989zM12 28.059h5v-2h-5v2zm0-22.06h5v-2h-5v2zM12 24h5V8h-5v16zm7.797-21.271l7.026-1.113c.514-.082 1 .289 1.086.829l4.071 25.702c.086.54-.263 1.043-.777 1.124l-7.026 1.113c-.514.082-1-.289-1.086-.829L19.02 3.853c-.086-.54.263-1.043.777-1.124zm5.12 25.573l4.939-.783-.313-1.975-4.939.782.313 1.976zm-3.45-21.789l4.938-.782-.313-1.975-4.939.782.313 1.975zm2.815 17.78l4.939-.783-2.503-15.803-4.939.783 2.503 15.803z"
          id="a"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <mask id="b" fill="#fff">
          <use xlink:href="#a" />
        </mask>
        <g mask="url(#b)" fill={bgColor}>
          <path d="M0 0h32v32H0z" />
        </g>
      </g>
    </svg>
  );
};
