import { AppChildren } from '@/lib/utils';

export type MiLinkSetting = {
  href: string;
  target?: string;
};

export type MiLinkProps = AppChildren & {
  open: boolean;
  onChangeOpen: (value: boolean) => void;
  onChangeValue: (value: MiLinkSetting) => void;
};
