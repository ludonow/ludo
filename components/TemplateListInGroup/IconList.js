import React, { Component } from 'react';
import styled from 'styled-components';
import Delete from './Delete';
import Plus from './Plus';

const Wrapper = styled.div`
  bottom: 0;
  display: inline-flex;
  position: absolute;
`;

// class IconList extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <Plus />
//         <Delete />
//       </Wrapper>
//     );
//   }
// }

const IconList = () => (
  <Wrapper>
    <Plus />
    <Delete />
  </Wrapper>
);

export default IconList;
