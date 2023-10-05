import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper: 'shadow-none w-full overflow-hidden',
    title:
      'p-4 shadow-none flex-wrap overflow-x-auto rounded-none border-none flex justify-start items-center gap-2',
    editor: 'outline-none h-full border-t border-[hsl(var(--border))] p-4 ',
    button: 'shadow-none',
    icon: 'h-4 w-4',
    field: 'grid grid-cols-3 items-center gap-4',
  },
});
