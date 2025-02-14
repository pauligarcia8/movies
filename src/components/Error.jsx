const Error = ({ errorMessage }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-red-600">Error</h2>
        <p className="mt-2 text-gray-700">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Error;
