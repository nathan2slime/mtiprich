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

export const useToolbar = (editor: Editor) => {
  const [dropdown, setDropdown] = useState<ToolbarDropdown>({ image: false });

  const upDropdown = ({ value, name }: ToolbarDropdownOption) =>
    setDropdown({ ...dropdown, [name]: value });

  const toolbar: Toolbar[] = [
    {
      name: 'bold',
      action: () => editor.chain().focus().toggleBold().run(),
      icon: <BoldIcon size={18} />,
    },
    {
      name: 'italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      icon: <ItalicIcon size={18} />,
    },
    {
      name: 'blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      icon: <QuoteIcon size={18} />,
    },
    {
      name: 'paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      icon: <Pilcrow size={18} />,
    },
    {
      name: 'underline',
      action: () => editor.chain().focus().toggleUnderline().run(),
      icon: <UnderlineIcon size={18} />,
    },
    {
      name: 'strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      icon: <StrikethroughIcon size={18} />,
    },
    {
      name: { textAlign: 'left' },
      action: () => editor.chain().focus().setTextAlign('left').run(),
      icon: <AlignLeft size={18} />,
    },
    {
      name: { textAlign: 'right' },
      action: () => editor.chain().focus().setTextAlign('right').run(),
      icon: <AlignRight size={18} />,
    },
    {
      name: { textAlign: 'center' },
      action: () => editor.chain().focus().setTextAlign('center').run(),
      icon: <AlignCenter size={18} />,
    },
    {
      name: { textAlign: 'justify' },
      action: () => editor.chain().focus().setTextAlign('justify').run(),
      icon: <AlignJustify size={18} />,
    },
    {
      name: 'heading',
      args: { level: 1 },
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      icon: <Heading1Icon size={18} />,
    },
    {
      name: 'heading',
      args: { level: 2 },
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      icon: <Heading2Icon size={18} />,
    },
    {
      name: 'heading',
      args: { level: 3 },
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      icon: <Heading3Icon size={18} />,
    },
    {
      name: 'heading',
      args: { level: 4 },
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      icon: <Heading4Icon size={18} />,
    },
    {
      name: 'heading',
      args: { level: 5 },
      action: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      icon: <Heading5Icon size={18} />,
    },
    {
      name: 'heading',
      args: { level: 6 },
      action: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      icon: <Heading6Icon size={18} />,
    },
    {
      name: 'codeBlock',
      action: () =>
        editor
          .chain()
          .focus()
          .toggleCodeBlock({ language: 'typescript' })
          .run(),
      icon: <CodeIcon size={18} />,
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
      icon: <LinkIcon size={18} />,
    },
    {
      name: 'bulletList',
      action: () => editor.chain().focus().toggleBulletList().run(),
      icon: <ListIcon size={18} />,
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
      icon: <ImageIcon size={18} />,
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
      icon: <YoutubeIcon size={18} />,
    },
  ];

  return { toolbar, dropdown, upDropdown };
};
