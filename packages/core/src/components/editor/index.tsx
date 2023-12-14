import { useEffect } from 'react';
import { useEditor, Editor } from '@tiptap/react';
import { Image } from '@tiptap/extension-image';
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
import HardBreak from '@tiptap/extension-hard-break';
import Placeholder from '@tiptap/extension-placeholder';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';

import { MiToggle } from '../toggle';

import { useToolbar } from './hooks'
;
import { EditorProps } from './model';
import { CustomEditor, Head, Wrapper } from './styles';

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
      HardBreak.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
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
    if (editor) {
      const rich = editor.getHTML();

      if (rich == value) return;

      editor.commands.setContent(value, false, {});
    }
  }, [value]);

  useEffect(() => {
    editor && editor.on('update', () => onChangeValue(editor.getHTML()));
  }, [editor]);

  const { toolbar } = useToolbar(editor);

  const contentStyles = {
    height: height + 'px',
  };

  return (
    <Wrapper>
      <Head>
        {editor &&
          toolbar.map(({ name, action, icon, args = {}, component }) => {
            const children = (
              <MiToggle
                variant="outline"
                pressed={editor.isActive(name, args)}
                onPressedChange={() => action()}
              >
                {icon}
              </MiToggle>
            );

            return component ? component(children) : children;
          })}
      </Head>

      <CustomEditor
        {...props}
        style={contentStyles}
        editor={editor}
      />
    </Wrapper>
  );
};
