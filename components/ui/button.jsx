function Button({ children }) {
  return (
    <div className="flex justify-center">
      <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold text-[18px] cursor-pointer hover:bg-gray-900/95 transition-all duration-300">
        {children}
      </button>
    </div>
  );
}

export default Button;
