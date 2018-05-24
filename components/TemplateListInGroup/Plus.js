import React, { Component } from 'react';
import { Icon } from './baseStyle';

const plusIconSrc = '/static/plus.svg';

// const Wrapper = styled.div`
//   background-color: #009688;
// `;

// class Plus extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <Plus />
//       </Wrapper>
//     );
//   }
// }

const Plus = () => (
  <div>
    <Icon
      alt="plus"
      src={plusIconSrc}
    />
  </div>
);

export default Plus;
