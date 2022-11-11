export const RawSelect = ({ value, options = [], onChange }: any) => (
  <div className="file-signature-crypto-pro__raw-select">
    <select className="select" onChange={(e)=>onChange(e.target.value)}>
      {options.map((option: any) => {
        const optionValue = option && option.value ? option.value : option;
        const optionLabel = option && option.label ? option.label : option;
        return (
            // @ts-ignore
          <option key={optionValue} value={optionValue} defaultValue={value === optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  </div>
);

const Select = ({ label, ...other }: any) => {
  return (
    <label>
      <div className="file-signature-crypto-pro__select__container">
        {label ? (
          <div className="file-signature-crypto-pro__select__label">
            <span className="file-signature-crypto-pro__select__label__text">{label}</span>
          </div>
        ) : null}
        <RawSelect {...other} />
      </div>
    </label>
  );
};

export default Select;
