'use client';

import { MtiEditor } from '@mtiprich/core';

import '@mtiprich/core/dist/index.css';

const Index = () => (
  <div className="p-9">
    <MtiEditor
      value=""
      height={430}
      className="font-normal"
      onChangeValue={e => console.log(e)}
    />
  </div>
);
export default Index;
