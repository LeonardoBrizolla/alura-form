import { LabelForm } from '../../objects/LabelForm';
import { InputForm } from '../../objects/InputForm';

export const InputAlura = ({ id, contentLabel, type }) => (
  <>
    <LabelForm htmlFor={id} content={contentLabel} />
    <InputForm id={id} type={type} />
  </>
);
