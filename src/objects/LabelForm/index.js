export const LabelForm = ({ htmlFor = '', content = '' }) => (
  <label htmlFor={htmlFor} className="label-form">
    {content}
  </label>
);
