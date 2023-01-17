import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return { paginatedData, currentPage, totalPages, nextPage, prevPage };
}

export default usePagination;

// import { usePagination } from './usePagination';

// function Table({ data }) {
//   const { paginatedData, currentPage, totalPages, nextPage, prevPage } = usePagination(data, 10);
//   return (
//     <div>
//       <table>
//         <tbody>
//           {paginatedData.map(item => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         Page {currentPage} of {totalPages}
//         <button onClick={prevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <button onClick={nextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
