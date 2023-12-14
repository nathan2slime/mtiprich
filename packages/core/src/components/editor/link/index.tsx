import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { MiLabel } from '@/components/label';
import { MiInput } from '@/components/input';
import { MiButton } from '@/components/button';

import { MiLinkProps } from './model';
import { Wrapper } from './styles';

const schema = yup.object().shape({
  href: yup.string().url().required('Field is required'),
  target: yup.string(),
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

  const onSubmit = () => {
    onChangeValue(form);

    reset();
    onChangeOpen(false);
  };

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <Wrapper>
          <div className="header">
            <h4 className="title">Link</h4>
            <p className="description">Set the settings for the link.</p>
          </div>
          <div className="group">
            <div className="fieldset">
              <MiLabel>Source</MiLabel>
              <MiInput
                value={form.href}
                onChange={e =>
                  setValue('href', e.target.value, { shouldValidate: true })
                }
                className="field"
              />
            </div>

            <div className="fieldset">
              <MiLabel>Target</MiLabel>
              <MiInput
                value={form.target}
                onChange={e =>
                  setValue('target', e.target.value, { shouldValidate: true })
                }
                className="field"
              />
            </div>

            <div className="footer">
              <MiButton onClick={() => onSubmit()} disabled={!isValid}>
                Add
              </MiButton>
            </div>
          </div>
        </Wrapper>
      </PopoverContent>
    </Popover>
  );
};
