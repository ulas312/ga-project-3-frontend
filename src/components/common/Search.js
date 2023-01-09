// import { useState, useEffect } from 'react';
// import { TextField, Box } from '@mui/material';
// import { API } from '../../lib/api';

// export default function Search({ handleSearchChange, searchedWorkouts }) {
//   const [query, setQuery] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleChange = (e) => setQuery(e.target.value);

//   useEffect(() => {
//     if (!query) {
//       setIsDropdownOpen(false);
//     }
//     if (query) {
//       API.GET(API.ENDPOINTS.search(query))
//         .then(({ data }) => {
//           handleSearchChange(data);
//           setIsDropdownOpen(true);
//         })
//         .catch((error) => console.error(error));
//     }
//   }, [query, handleSearchChange]);

//   return (
//     <Box className='search' sx={{ position: 'relative' }}>
//       <TextField value={query} onChange={handleChange} />
//       {isDropdownOpen && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '63px',
//             zIndex: 1,
//             right: '0px',
//             color: 'black',
//             background: '#ececec',
//             width: '100%',
//             padding: '3px',
//             borderRadius: '8px',
//           }}
//         >
//           {searchedWorkouts.map((workouts) => (
//             <p onClick={() => setIsDropdownOpen(false)}>{workouts.name}</p>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// }

import '../../styles/images.scss';

function Search({ value, handleChange }) {
  const handleInputChange = (e) => handleChange(e.target.value);

  return (
    <div className='SearchBar'>
      <div className='container'>
        <div className='field has-addons'>
          <div className='control is-expanded'>
            <input
              type='search'
              className='searchInput'
              placeholder='💪🏼...FIND YOUR WORKOUT...💪🏼'
              value={value}
              onChange={handleInputChange}
            />
          </div>
          <div className='control'>
            <span className='button is-info is-medium'>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
