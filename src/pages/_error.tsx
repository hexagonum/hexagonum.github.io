import { NextPage } from 'next';

export const ErrorPage: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold">500</h1>
          <p className="text-3xl uppercase">Error</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
