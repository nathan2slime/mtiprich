import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover';
import { MiLabel } from '@/components/label';
import { MiInput } from '@/components/input';
import { MiButton } from '@/components/button';

import { MiYoutubeProps } from './model';
import { Wrapper } from './styles';

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

  const onSubmit = () => {
    onChangeValue(form);

    reset();
    onChangeOpen(false);
  };

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <Wrapper className="form">
          <div className="header">
            <h4 className="title">Link youtube video</h4>
            <p className="description">
              Set the settings for the video.
            </p>
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
              <MiLabel>Width</MiLabel>
              <MiInput
                value={form.width}
                onChange={e =>
                  setValue('width', parseFloat(e.target.value), {
                    shouldValidate: true,
                  })
                }
                className="field"
              />
            </div>

            <div className="fieldset">
              <MiLabel>Height</MiLabel>
              <MiInput
                value={form.height}
                onChange={e =>
                  setValue('height', parseFloat(e.target.value), {
                    shouldValidate: true,
                  })
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
