'use client';

import { useState } from 'react';
import { MtiEditor } from '@nathan3boss/mtiprich';

import '@nathan3boss/mtiprich/dist/index.css';

const Index = () => {
  const [value, setValue] = useState('');
  return (
    <div className="p-9">
      <MtiEditor
        value={value}
        height={430}
        className="font-normal"
        onChangeValue={e => setValue(e)}
      />
    </div>
  );
}

export default Index;
