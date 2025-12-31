export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </div>
      <h1 className="text-xl font-bold text-dark-navy">Dew Flow Planner</h1>
    </div>
  );
}
