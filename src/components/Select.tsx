export interface ValueRawSelectI {
  defaultValue: string
  name: string
  value: string
  options: ValueSelectI[]
  onChange: (value: string) => void
}
export const RawSelect = ({ value, options = [], onChange }: ValueRawSelectI) => (
  <div className="file-signature-crypto-pro__raw-select">
    <select className="select" onChange={(e) => onChange(e.target.value)}>
      {options.map(({ value: optionValue, label }) => {
        return (
          <option key={optionValue} value={value} selected={value == optionValue}>
            {label}
          </option>
        )
      })}
    </select>
  </div>
)

export interface ValueSelectI {
  defaultValue: string
  label: string
  name: string
  value: string
  options: ValueSelectI[]
  onChange: (value: string) => void
}

const Select = ({ label, ...other }: ValueSelectI) => {
  return (
    <label>
      <div className="file-signature-crypto-pro__select__container">
        <div className="file-signature-crypto-pro__select__label">
          <span className="file-signature-crypto-pro__select__label__text">{label}</span>
        </div>
        <RawSelect {...other} />
      </div>
    </label>
  )
}

export default Select
