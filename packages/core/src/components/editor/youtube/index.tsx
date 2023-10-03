import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { MiYoutubeProps } from './model';
import { styles } from './styles';

const schema = yup.object().shape({
  src: yup.string().url().required('Field is required'),
  height: yup.number(),
  width: yup.number(),
});

export const MiYoutube = ({
  children,
  onChangeValue,
  onChangeOpen,
}: MiYoutubeProps) => {
  const {
    setValue,
    watch,
    reset,
    formState: { isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const form = watch();

  const style = styles();

  const onSubmit = () => {
    onChangeValue(form);

    reset();
    onChangeOpen(false);
  };

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className={style.wrapper()}>
        <div className={style.form()}>
          <div className={style.header()}>
            <h4 className={style.title()}>Link youtube video</h4>
            <p className={style.description()}>
              Set the settings for the video.
            </p>
          </div>
          <div className={style.group()}>
            <div className={style.fieldset()}>
              <Label>Source</Label>
              <Input
                value={form.src}
                onChange={e =>
                  setValue('src', e.target.value, { shouldValidate: true })
                }
                className={style.field()}
              />
            </div>

            <div className={style.fieldset()}>
              <Label>Width</Label>
              <Input
                value={form.width}
                onChange={e =>
                  setValue('width', parseFloat(e.target.value), {
                    shouldValidate: true,
                  })
                }
                className={style.field()}
              />
            </div>

            <div className={style.fieldset()}>
              <Label>Height</Label>
              <Input
                value={form.height}
                onChange={e =>
                  setValue('height', parseFloat(e.target.value), {
                    shouldValidate: true,
                  })
                }
                className={style.field()}
              />
            </div>

            <div className={style.footer()}>
              <Button onClick={() => onSubmit()} disabled={!isValid}>
                Add
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
