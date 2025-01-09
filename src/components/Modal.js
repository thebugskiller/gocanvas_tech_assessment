// import React from "react";

// const Modal = ({ brewery, onClose }) => {
//   if (!brewery) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded-lg max-w-lg w-full">
//           <p className="text-red-500">Error: Brewery data is not available.</p>
//           <button
//             onClick={onClose}
//             className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
//         >
//           &times;
//         </button>
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">{brewery.name}</h2>
        
//         <p className="text-lg text-gray-700 mb-4">
//           Type: <span className="font-medium text-gray-800">{brewery.brewery_type || 'N/A'}</span>
//         </p>

//         <p className="text-lg text-gray-700 mb-4">
//           Address: <span className="font-medium text-gray-800">{brewery.address_1 || 'N/A'}</span>
//           {brewery.address_2 && <span>, {brewery.address_2}</span>}
//           {brewery.address_3 && <span>, {brewery.address_3}</span>}
//         </p>

//         <p className="text-lg text-gray-700 mb-4">
//           Location:{" "}
//           <span className="font-medium text-gray-800">
//             {brewery.city || 'N/A'}, {brewery.state_province || 'N/A'} {brewery.postal_code || 'N/A'}, {brewery.country || 'N/A'}
//           </span>
//         </p>

//         <p className="text-lg text-gray-700 mb-4">
//           Coordinates:{" "}
//           <span className="font-medium text-gray-800">
//             {brewery.latitude && brewery.longitude
//               ? `${brewery.latitude}, ${brewery.longitude}`
//               : 'Not available'}
//           </span>
//         </p>

//         <p className="text-lg text-gray-700 mb-4">
//           Phone: <span className="font-medium text-gray-800">
//             {brewery.phone ? brewery.phone : <span className="italic text-gray-500">Not available</span>}
//           </span>
//         </p>

//         <div className="flex justify-between items-center">
//           {brewery.website_url ? (
//             <a
//               href={brewery.website_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors"
//             >
//               Visit Website →
//             </a>
//           ) : (
//             <p className="text-lg text-gray-500 italic">No website available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";

const Modal = ({ brewery, onClose }) => {
  if (!brewery) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-lg w-full">
          <p data-testid="modal-error-message" className="text-red-500">
            Error: Brewery data is not available.
          </p>
          <button
            data-testid="modal-close-button"
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          data-testid="modal-close-button"
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 data-testid="modal-brewery-name" className="text-3xl font-bold text-gray-800 mb-4">{brewery.name}</h2>
        
        <p data-testid="modal-brewery-type" className="text-lg text-gray-700 mb-4">
          Type: <span className="font-medium text-gray-800">{brewery.brewery_type || 'N/A'}</span>
        </p>

        <p data-testid="modal-brewery-address" className="text-lg text-gray-700 mb-4">
          Address: <span className="font-medium text-gray-800">{brewery.address_1 || 'N/A'}</span>
          {brewery.address_2 && <span>, {brewery.address_2}</span>}
          {brewery.address_3 && <span>, {brewery.address_3}</span>}
        </p>

        <p data-testid="modal-brewery-location" className="text-lg text-gray-700 mb-4">
          Location:{" "}
          <span className="font-medium text-gray-800">
            {brewery.city || 'N/A'}, {brewery.state_province || 'N/A'} {brewery.postal_code || 'N/A'}, {brewery.country || 'N/A'}
          </span>
        </p>

        <p data-testid="modal-brewery-coordinates" className="text-lg text-gray-700 mb-4">
          Coordinates:{" "}
          <span className="font-medium text-gray-800">
            {brewery.latitude && brewery.longitude
              ? `${brewery.latitude}, ${brewery.longitude}`
              : 'Not available'}
          </span>
        </p>

        <p data-testid="modal-brewery-phone" className="text-lg text-gray-700 mb-4">
          Phone: <span className="font-medium text-gray-800">
            {brewery.phone ? brewery.phone : <span className="italic text-gray-500">Not available</span>}
          </span>
        </p>

        <div className="flex justify-between items-center">
          {brewery.website_url ? (
            <a
              data-testid="modal-brewery-website"
              href={brewery.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Visit Website →
            </a>
          ) : (
            <p data-testid="modal-no-website" className="text-lg text-gray-500 italic">No website available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
