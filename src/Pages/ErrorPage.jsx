import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-4xl text-red-600 font-bold mb-4">404 Not Found</h1>
          <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={()=>navigate(-1) }
          >
            Go Back
          </button>
        </div>
      </div>
    );
};

export default ErrorPage;