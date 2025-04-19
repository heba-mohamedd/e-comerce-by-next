export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse flex flex-col sm:flex-row mx-auto justify-between p-6  rounded-lg shadow-md ">
      <div className="w-full sm:w-1/3 flex justify-center mb-6 sm:mb-0 bg-gray-200 h-80"></div>
      <div className="flex flex-col space-y-4 sm:ml-6 w-full">
        <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
        <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
        <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
        <div className="h-20 bg-gray-200 w-full rounded"></div>
      </div>
    </div>
  );
}
