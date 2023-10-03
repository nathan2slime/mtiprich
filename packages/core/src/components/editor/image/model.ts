import { AppChildren } from '@/lib/utils';

export type MiImageSetting = {
  src: string;
  alt?: string;
  title?: string;
};

export type MiImageProps = AppChildren & {
  open: boolean;
  onChangeOpen: (value: boolean) => void;
  onChangeValue: (value: MiImageSetting) => void;
};
