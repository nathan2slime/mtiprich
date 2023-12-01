import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper: 'w-80',
    form: 'grid gap-4',
    group: 'grid gap-2',
    header: 'space-y-2',
    fieldset: 'grid grid-cols-3 items-center gap-4',
    footer: 'grid grid-cols-3 items-end gap-4',
    description: 'text-sm text-muted-foreground',
    field: 'col-span-2 h-8',
    title: 'font-medium leading-none',
  },
});
