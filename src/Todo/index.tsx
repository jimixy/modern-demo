import React, { useEffect, useState } from 'react';
import './index.less';
import styled from '@modern-js/runtime/styled';
import { get as concats } from '@api/contacts';
import { List } from 'antd';
import { useLocalModel } from '@modern-js/runtime/model';
import todoModel from './model';

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border: 4px solid #0ef;
  border-radius: 50%;
`;

const Todo: React.FC = () => {
  const [{ items, error, pending }, actions] = useLocalModel(todoModel);

  // const [list, setList] = useState(
  //   [] as Array<{ name: string; email: string; avatar: string }>,
  // );

  useEffect(() => {
    if (!items.length && !error && !pending) {
      actions.load('33', 33);
    }
  });

  // const loadMockData = async () => {
  //   const { data } = await concats();
  //   setList(data);
  // };

  // useEffect(() => {
  //   if (!list.length) {
  //     loadMockData();
  //   }
  // });

  const onClick = (e: any) => {
    actions.archive('222');
    console.log('onClick', e);
  };

  return (
    <div className="todo-container" onClick={onClick}>
      {(items.length && (
        <List
          dataSource={items}
          renderItem={info => (
            <div>
              <span>{info.name}</span>
              <Avatar src={info.avatar} alt={info.name} />
            </div>
          )}
        />
      )) || (
        <div className="p-4 items-center border-gray-200 border-b border-t custom-text-gray">
          Pending...
        </div>
      )}
    </div>
  );
};

export default Todo;
