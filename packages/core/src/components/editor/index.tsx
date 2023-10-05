import { useEditor, EditorContent, Editor } from '@tiptap/react';
import { Image } from '@tiptap/extension-image';
import { useEffect } from 'react';
import { createLowlight } from 'lowlight';
import StarterKit from '@tiptap/starter-kit';
import Code from '@tiptap/extension-code';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlock from '@tiptap/extension-code-block';
import BulletList from '@tiptap/extension-bullet-list';
import Blockquote from '@tiptap/extension-blockquote';
import Heading from '@tiptap/extension-heading';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Paragraph from '@tiptap/extension-paragraph';
import Youtube from '@tiptap/extension-youtube';
import Placeholder from '@tiptap/extension-placeholder';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';

import { Toggle } from '@/components/ui/toggle';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import { useToolbar } from './hooks';
import { EditorProps } from './model';
import { styles } from './styles';

export const MtiEditor = ({
  value,
  onChangeValue,
  className,
  height,
  ...props
}: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Paragraph,
      Youtube,
      Code,
      CodeBlock,
      BulletList,
      Blockquote,
      Link,
      Strike,
      Underline,
      Heading,
      Color,
      Highlight,
      Link,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder,
      TaskList,
      TaskItem,
    ],
    content: value,
  }) as Editor;

  useEffect(() => {
    editor && editor.on('update', () => onChangeValue(editor.getHTML()));
  }, [editor]);

  const style = styles();

  const { toolbar } = useToolbar(editor);

  const contentStyles = {
    height: height + 'px',
  };

  return (
    <Card className={style.wrapper()}>
      <Card className={style.title()}>
        {editor &&
          toolbar.map(({ name, action, icon, args = {}, component }) => {
            const children = (
              <Toggle
                variant="outline"
                className={style.button()}
                pressed={editor.isActive(name, args)}
                onPressedChange={() => action()}
              >
                {icon}
              </Toggle>
            );

            return component ? component(children) : children;
          })}
      </Card>
      
      <ScrollArea style={contentStyles}>
        <EditorContent
          {...props}
          className={style.editor({ className })}
          editor={editor}
        />
      </ScrollArea>
    </Card>
  );
};
