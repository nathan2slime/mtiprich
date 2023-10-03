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

import { MiLinkProps } from './model';
import { styles } from './styles';

const schema = yup.object().shape({
  href: yup.string().url().required('Field is required'),
  target: yup.string()
});

export const MiLink = ({
  children,
  onChangeValue,
  onChangeOpen,
}: MiLinkProps) => {
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
            <h4 className={style.title()}>Link</h4>
            <p className={style.description()}>
              Set the settings for the link.
            </p>
          </div>
          <div className={style.group()}>
            <div className={style.fieldset()}>
              <Label>Source</Label>
              <Input
                value={form.href}
                onChange={e =>
                  setValue('href', e.target.value, { shouldValidate: true })
                }
                className={style.field()}
              />
            </div>

            <div className={style.fieldset()}>
              <Label>Target</Label>
              <Input
                value={form.target}
                onChange={e =>
                  setValue('target', e.target.value, { shouldValidate: true })
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
