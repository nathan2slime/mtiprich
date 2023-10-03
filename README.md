### MTipRich

> 😾 <p>Rich text editor with tiptap and shadcn/ui</p>

#### Install

`npm install @nathan3boss/mtiprich`

#### Usage

```ts
import { MtiEditor } from '@nathan3boss/mtiprich';

export const Editor = () => {
  const [value, setValue] = useState('<p>Hi</p>');
  
    
  return (
    <MtiEditor
      value={value}
      height={430}
      onChangeValue={e => setValue(e)}
    /> 
  );
}
```

#### Activity

![Alt](https://repobeats.axiom.co/api/embed/7f8429a6231b2d8bc6b55abcb8245c075510243e.svg 'Repobeats analytics image')

#### Contributors

<a href = "https://github.com/nathan2slime/mtiprich/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=nathan2slime/mtiprich"/>
</a>