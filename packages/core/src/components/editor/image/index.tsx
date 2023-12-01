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

import { MiImageProps } from './model';
import { styles } from './styles';

const schema = yup.object().shape({
  src: yup.string().url().required('Field is required'),
  alt: yup.string(),
  title: yup.string(),
});

export const MiImage = ({
  children,
  onChangeValue,
  onChangeOpen,
}: MiImageProps) => {
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
            <h4 className={style.title()}>Link image</h4>
            <p className={style.description()}>
              Set the settings for the image.
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
              <Label>Alt</Label>
              <Input
                value={form.alt}
                onChange={e =>
                  setValue('alt', e.target.value, { shouldValidate: true })
                }
                className={style.field()}
              />
            </div>
            <div className={style.fieldset()}>
              <Label>Title</Label>
              <Input
                value={form.title}
                onChange={e =>
                  setValue('title', e.target.value, { shouldValidate: true })
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
