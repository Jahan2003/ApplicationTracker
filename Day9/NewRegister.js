import React, { useState } from 'react';
import '../Assets/Styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="registration-form">
      <div className="progress-bar">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index + 1}
            className={`progress-step ${index + 1 === currentPage ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {currentPage === 1 && (
        <div className="registration-page">
          <h2>Page 1</h2>
          {/* Registration form content for page 1 */}
          <button onClick={handleNextPage}>Next</button>
        </div>
      )}

      {currentPage === 2 && (
        <div className="registration-page">
          <h2>Page 2</h2>
          {/* Registration form content for page 2 */}
          <button onClick={handlePreviousPage}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      )}

      {currentPage === 3 && (
        <div className="registration-page">
          <h2>Page 3</h2>
          {/* Registration form content for page 3 */}
          <button onClick={handlePreviousPage}>Previous</button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
