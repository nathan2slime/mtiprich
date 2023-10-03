import { Editor } from '@tiptap/react';
import {
  BoldIcon,
  ItalicIcon,
  QuoteIcon,
  ImageIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  YoutubeIcon,
  Heading5Icon,
  LinkIcon,
  StrikethroughIcon,
  UnderlineIcon,
  Heading6Icon,
  Pilcrow,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  CodeIcon,
  ListIcon,
} from 'lucide-react';
import { ReactNode, useState } from 'react';

import { MiImage } from '../image';
import { MiYoutube } from '../youtube';

import { Toolbar, ToolbarDropdown, ToolbarDropdownOption } from '../model';
import { MiLink } from '../link';
import { styles } from '../styles';

export const useToolbar = (editor: Editor) => {
  const style = styles();

  const [dropdown, setDropdown] = useState<ToolbarDropdown>({ image: false });

  const upDropdown = ({ value, name }: ToolbarDropdownOption) =>
    setDropdown({ ...dropdown, [name]: value });

  const toolbar: Toolbar[] = [
    {
      name: 'bold',
      action: () => editor.chain().focus().toggleBold().run(),
      icon: <BoldIcon className={style.icon()} />,
    },
    {
      name: 'italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      icon: <ItalicIcon className={style.icon()} />,
    },
    {
      name: 'blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      icon: <QuoteIcon className={style.icon()} />,
    },
    {
      name: 'paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      icon: <Pilcrow className={style.icon()} />,
    },
    {
      name: 'underline',
      action: () => editor.chain().focus().toggleUnderline().run(),
      icon: <UnderlineIcon className={style.icon()} />,
    },
    {
      name: 'strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      icon: <StrikethroughIcon className={style.icon()} />,
    },
    {
      name: { textAlign: 'left' },
      action: () => editor.chain().focus().setTextAlign('left').run(),
      icon: <AlignLeft className={style.icon()} />,
    },
    {
      name: { textAlign: 'right' },
      action: () => editor.chain().focus().setTextAlign('right').run(),
      icon: <AlignRight className={style.icon()} />,
    },
    {
      name: { textAlign: 'center' },
      action: () => editor.chain().focus().setTextAlign('center').run(),
      icon: <AlignCenter className={style.icon()} />,
    },
    {
      name: { textAlign: 'justify' },
      action: () => editor.chain().focus().setTextAlign('justify').run(),
      icon: <AlignJustify className={style.icon()} />,
    },
    {
      name: 'heading',
      args: { level: 1 },
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      icon: <Heading1Icon className={style.icon()} />,
    },
    {
      name: 'heading',
      args: { level: 2 },
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      icon: <Heading2Icon className={style.icon()} />,
    },
    {
      name: 'heading',
      args: { level: 3 },
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      icon: <Heading3Icon className={style.icon()} />,
    },
    {
      name: 'heading',
      args: { level: 4 },
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      icon: <Heading4Icon className={style.icon()} />,
    },
    {
      name: 'heading',
      args: { level: 5 },
      action: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      icon: <Heading5Icon className={style.icon()} />,
    },
    {
      name: 'heading',
      args: { level: 6 },
      action: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      icon: <Heading6Icon className={style.icon()} />,
    },
    {
      name: 'codeBlock',
      action: () =>
        editor
          .chain()
          .focus()
          .toggleCodeBlock({ language: 'typescript' })
          .run(),
      icon: <CodeIcon className={style.icon()} />,
    },
    {
      name: 'link',
      action: () => upDropdown({ name: 'link', value: true }),
      component: (children: ReactNode) => (
        <MiLink
          open={dropdown.link}
          onChangeValue={config => editor.commands.setLink(config)}
          onChangeOpen={e => upDropdown({ name: 'link', value: e })}
        >
          {children}
        </MiLink>
      ),
      icon: <LinkIcon className={style.icon()} />,
    },
    {
      name: 'bulletList',
      action: () => editor.chain().focus().toggleBulletList().run(),
      icon: <ListIcon className={style.icon()} />,
    },
    {
      name: 'image',
      action: () => upDropdown({ name: 'image', value: true }),
      component: (children: ReactNode) => (
        <MiImage
          open={dropdown.image}
          onChangeValue={config => editor.commands.setImage(config)}
          onChangeOpen={e => upDropdown({ name: 'image', value: e })}
        >
          {children}
        </MiImage>
      ),
      icon: <ImageIcon className={style.icon()} />,
    },
    {
      name: 'youtube',
      action: () => upDropdown({ name: 'youtube', value: true }),
      component: (children: ReactNode) => (
        <MiYoutube
          open={dropdown.image}
          onChangeValue={config => editor.commands.setYoutubeVideo(config)}
          onChangeOpen={e => upDropdown({ name: 'youtube', value: e })}
        >
          {children}
        </MiYoutube>
      ),
      icon: <YoutubeIcon className={style.icon()} />,
    },
  ];

  return { toolbar, dropdown, upDropdown };
};
