export default function Navigation() {
  return (
    <nav className="flex justify-between h-[10vh] max-w-[95%] mx-auto">
      <h1>Loop Scrolling</h1>
      <a>
        <span>Back to the article</span>
        <svg width="18px" height="18px" viewBox="0 0 24 24">
          <path
            // vector-effect="non-scaling-stroke"
            d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
          ></path>
        </svg>
      </a>
      <a>Previous demo</a>
    </nav>
  );
}
