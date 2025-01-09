// import React from "react";

// const BreweryCard = ({
//   name,
//   city,
//   state,
//   postal_code,
//   country,
//   phone,
//   website,
//   onClick,
// }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="p-8 bg-[#91AC8F] bg-opacity-40 rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:-translate-y-1 transform duration-300 max-w-md cursor-pointer"
//     >
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
//       <p className="text-lg text-gray-700 mb-4">
//         Located in <span className="font-medium text-gray-800">{city}, {state} {postal_code}, {country}</span>
//       </p>
//       <p className="text-lg text-gray-700 mb-4">
//         Phone: <span className="font-medium text-gray-800">
//           {phone ? phone : <span className="italic text-gray-500">Not available</span>}
//         </span>
//       </p>
//       <div className="flex justify-between items-center">
//         {website ? (
//           <a
//             href={website}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors"
//           >
//             Visit Website →
//           </a>
//         ) : (
//           <p className="text-lg text-gray-500 italic">No website available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BreweryCard;



import React from "react";

const BreweryCard = ({
  name,
  city,
  state,
  postal_code,
  country,
  phone,
  website,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      data-testid="brewery-card"
      className="p-8 bg-[#91AC8F] bg-opacity-40 rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:-translate-y-1 transform duration-300 max-w-md cursor-pointer"
    >
      <h2 data-testid="brewery-name" className="text-3xl font-bold text-gray-800 mb-4">
        {name}
      </h2>
      <p data-testid="brewery-location" className="text-lg text-gray-700 mb-4">
        Located in <span className="font-medium text-gray-800">
          {city}, {state} {postal_code}, {country}
        </span>
      </p>
      <p data-testid="brewery-phone" className="text-lg text-gray-700 mb-4">
        Phone: <span className="font-medium text-gray-800">
          {phone ? phone : <span className="italic text-gray-500">Not available</span>}
        </span>
      </p>
      <div className="flex justify-between items-center">
        {website ? (
          <a
            data-testid="brewery-website"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            Visit Website →
          </a>
        ) : (
          <p data-testid="brewery-no-website" className="text-lg text-gray-500 italic">
            No website available
          </p>
        )}
      </div>
    </div>
  );
};

export default BreweryCard;
