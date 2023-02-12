/* eslint-disable */
import { RawSelect } from './RawSelect';
export interface ValueSelectI {
  defaultValue: string;
  label: string;
  name: string;
  value: string;
  options: ValueSelectI[];
  onChange: (value: string) => void;
}

const Select = ({ label, ...other }: ValueSelectI) => {
  return (
    <label>
      <div className="file-signature-crypto-pro__select__container">
        <div className="file-signature-crypto-pro__select__label">
          <span className="file-signature-crypto-pro__select__label__text">
            {label}
          </span>
        </div>
        <RawSelect {...other} />
      </div>
    </label>
  );
};

export default Select;
