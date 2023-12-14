import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { MiLabel } from '@/components/label';
import { MiInput } from '@/components/input';
import { MiButton } from '@/components/button';

import { MiImageProps } from './model';
import { Wrapper } from './styles';

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
            <h4 className="title">Link image</h4>
            <p className="description">Set the settings for the image.</p>
          </div>
          <div className="group">
            <div className="fieldset">
              <MiLabel>Source</MiLabel>
              <MiInput
                value={form.src}
                onChange={e =>
                  setValue('src', e.target.value, { shouldValidate: true })
                }
                className="field"
              />
            </div>
            <div className="fieldset">
              <MiLabel>Alt</MiLabel>
              <MiInput
                value={form.alt}
                onChange={e =>
                  setValue('alt', e.target.value, { shouldValidate: true })
                }
                className="field"
              />
            </div>
            <div className="fieldset">
              <MiLabel>Title</MiLabel>
              <MiInput
                value={form.title}
                onChange={e =>
                  setValue('title', e.target.value, { shouldValidate: true })
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
