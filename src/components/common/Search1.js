// import { useState, useEffect } from 'react';
// import { Box, alpha, AppBar, Toolbar, styled } from 'mui/material';
// import { API } from '../lib/api';
// import { SearchIcon } from '@mui/icons-material';
// import InputBase from '@mui/material/InputBase';

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
//         .catch((e) => console.error(e));
//     }
//   }, [query, handleSearchChange]);

//   const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position='static'>
//         <Toolbar>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             {isDropdownOpen && (
//               <StyledInputBase
//                 placeholder='Search…'
//                 value={query}
//                 onChange={handleChange}
//                 inputProps={{ 'aria-label': 'search' }}
//               >
//                 {searchedWorkouts.map((workout) => (
//                   <p onClick={() => setIsDropdownOpen(false)}>{workout.name}</p>
//                 ))}
//               </StyledInputBase>
//             )}
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
