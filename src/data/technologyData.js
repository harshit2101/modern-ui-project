import {v4 as uuid} from 'uuid'

const ids=[1,2,3].map(()=>uuid())

const dataSource = [
    { id: ids[0], name: 'Harshit verma 1' },
    { id: ids[1], name: 'harshit verma 2' },
    { id: ids[2], name: 'harshit verma 3' },
  ];

export default dataSource