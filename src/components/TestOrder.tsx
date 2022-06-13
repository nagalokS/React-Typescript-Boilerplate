import { FC } from 'react';
import style from './TestOrder.module.scss';

type TestOrderType = {
  age: number;
  name: string;
};
const obj123 = {
  age: 22,
  name: 'TestNmae',
};
const TestOrder: FC<TestOrderType> = ({ name, age }) => {
  return (
    <div className={style.wrapper}>
      <p>{name}</p>
      <p>{age}</p>
      <p>{obj123.age}</p>
    </div>
  );
};

export default TestOrder;
