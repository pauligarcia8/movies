const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-between">
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
        <p className="text-lg font-semibold mx-1">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
