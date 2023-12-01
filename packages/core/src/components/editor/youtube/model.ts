import { AppChildren } from '@/lib/utils';

export type MiYoutubeSetting = {
  src: string;
  width?: number;
  height?: number;
  controls?: boolean;
  allowFullscreen?: boolean;
};

export type MiYoutubeProps = AppChildren & {
  open: boolean;
  onChangeOpen: (value: boolean) => void;
  onChangeValue: (value: MiYoutubeSetting) => void;
};
