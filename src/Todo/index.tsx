import React from 'react';
import './index.less';
import styled from '@modern-js/runtime/styled';

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border: 4px solid #0ef;
  border-radius: 50%;
`;

const Todo: React.FC = () => {
  const onClick = e => {
    console.log('onClick', e);
  };

  return (
    <div className="todo-container" onClick={onClick}>
      <div className="todo-list">33</div>
      <div className="todo-list">44</div>
    </div>
  );
};

export default Todo;
