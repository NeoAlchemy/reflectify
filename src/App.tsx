import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import './style.css';

export default function App() {
  return (
    <div>
      <center>
        <h1>Hello StackBlitz!</h1>
      </center>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </div>
  );
}
