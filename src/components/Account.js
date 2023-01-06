import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Account = () => (
  <section className='Home'>
    <h1>PROFILE PAGE</h1>
    <Stack direction='row' spacing={2}>
      <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
    </Stack>
  </section>
);

export default Account;
