import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';

import { Label } from './styles';

const MiLabel = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => <Label ref={ref} {...props} />);

MiLabel.displayName = Root.displayName;

export { MiLabel  };
