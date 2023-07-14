import React, { useState } from 'react';

const JobFilter = ({ onFilter }) => {
  const [salary, setSalary] = useState('');
  const [experience, setExperience] = useState('');
  const [jobRole, setJobRole] = useState('');

  const handleFilter = () => {
    const filterData = {
      salary,
      experience,
      jobRole
    };
    onFilter(filterData);
  };

  return (
    <div>
      <h3>Job Filter</h3>
      <label>
        Salary:
        <input
          type="text"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
      </label>
      <label>
        Experience:
        <input
          type="text"
          value={experience}
          onChange={e => setExperience(e.target.value)}
        />
      </label>
      <label>
        Job Role:
        <input
          type="text"
          value={jobRole}
          onChange={e => setJobRole(e.target.value)}
        />
      </label>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default JobFilter;
