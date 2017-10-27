// import { Preact, h } from 'preact';
const RoboAuto = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...otherProps}>
      <title>Icon/product/Platform/Robo-auto</title>
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M26.405 18.213a10.754 10.754 0 0 1-1.734 4.165l.83.83a1.969 1.969 0 1 1-2.785 2.784l-.83-.83a10.773 10.773 0 0 1-4.163 1.733v1.166a1.97 1.97 0 1 1-3.938 0v-1.166a10.775 10.775 0 0 1-4.164-1.733l-.83.83a1.969 1.969 0 1 1-2.784-2.784l.83-.83a10.762 10.762 0 0 1-1.735-4.165H3.94a1.968 1.968 0 1 1 0-3.936h1.163c.281-1.526.887-2.935 1.735-4.165l-.83-.83A1.968 1.968 0 1 1 8.79 6.498l.831.831a10.768 10.768 0 0 1 4.163-1.732V4.431a1.969 1.969 0 1 1 3.938 0v1.166c1.525.28 2.933.886 4.162 1.732l.831-.831a1.97 1.97 0 0 1 2.785 2.784l-.83.83a10.754 10.754 0 0 1 1.734 4.165h1.164a1.968 1.968 0 1 1 0 3.936h-1.164zm5.103-1.968a3.939 3.939 0 0 0-3.568-3.92 12.74 12.74 0 0 0-.798-1.923 3.939 3.939 0 0 0-5.544-5.544 12.755 12.755 0 0 0-1.924-.8 3.938 3.938 0 0 0-7.84 0c-.667.215-1.31.484-1.924.8a3.939 3.939 0 0 0-5.543 5.544 12.742 12.742 0 0 0-.8 1.923 3.936 3.936 0 1 0 0 7.839c.215.668.484 1.31.8 1.925a3.937 3.937 0 0 0 5.543 5.543c.615.316 1.257.585 1.924.8a3.937 3.937 0 0 0 7.84 0 12.75 12.75 0 0 0 1.923-.8 3.937 3.937 0 0 0 5.544-5.543 12.74 12.74 0 0 0 .8-1.925 3.936 3.936 0 0 0 3.567-3.919z" />
        <path d="M15.754 21.814a5.567 5.567 0 0 1-5.383-4.162h1.708L9.372 14.27l-2.708 3.383h1.842a7.385 7.385 0 0 0 7.248 5.978 7.38 7.38 0 0 0 6.548-3.976h-2.15a5.555 5.555 0 0 1-4.398 2.16m0-11.138a5.567 5.567 0 0 1 5.382 4.16h-1.708l2.708 3.385 2.707-3.385h-1.841a7.38 7.38 0 1 0-13.795-2h2.15a5.554 5.554 0 0 1 4.397-2.16" />
      </g>
    </svg>
  );
};
export default RoboAuto;
