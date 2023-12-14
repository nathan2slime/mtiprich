import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, Trigger, Portal } from '@radix-ui/react-popover';

import { CustomContent } from './styles';

const Popover = Root;

const PopoverTrigger = Trigger;

const PopoverContent = forwardRef<
  ElementRef<typeof CustomContent>,
  ComponentPropsWithoutRef<typeof CustomContent>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <Portal>
    <CustomContent ref={ref} align={align} sideOffset={sideOffset} {...props} />
  </Portal>
));

PopoverContent.displayName = 'Popover';

export { Popover, PopoverTrigger, PopoverContent };
