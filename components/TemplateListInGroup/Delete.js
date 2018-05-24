import React, { Component } from 'react';
import { Icon } from './baseStyle';

const deleteIconSrc = '/static/delete.svg';

// class Delete extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <Delete />
//       </Wrapper>
//     );
//   }
// }

const Delete = () => (
  <div>
    <Icon
      alt="delete"
      src={deleteIconSrc}
    />
  </div>
);

export default Delete;
