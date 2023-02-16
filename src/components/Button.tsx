function Button({ type, text, vehicleType, site, isLoading }) {
  function renderSpinner() {
    return (
      <div className="flex items-center text-slate-800 font-semibold hover:bg-opacity-70">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="rgb(165 243 252)"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="rgb(34 211 238)"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Hämtar</span>
      </div>
    );
  }

  return (
    <div>
      <button
        type={type}
        className="py-2 px-4 bg-cyan-400 rounded text-slate-800 font-semibold hover:bg-opacity-70"
      >
        {!isLoading ? text : renderSpinner()}
      </button>
    </div>
  );
}

export default Button;
