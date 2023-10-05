'use client';

import { useState } from 'react';
import { MtiEditor } from '@nathan3boss/mtiprich';
import { useTheme } from 'next-themes';

import '@nathan3boss/mtiprich/dist/index.css';
import '@nathan3boss/mtiprich/dist/src/global/fonts.css';

const Index = () => {
  const { setTheme, theme } = useTheme();
  const [value, setValue] = useState('');

  return (
    <div className="p-9">
      <MtiEditor
        value={value}
        height={430}
        onChangeValue={e => setValue(e)}
      />

      <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
        {theme}
      </button>
    </div>
  );
};

export default Index;
