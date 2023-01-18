import { ValueSelectI } from './Select'

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
          <option key={optionValue} value={optionValue} defaultValue={value}>
            {label}
          </option>
        )
      })}
    </select>
  </div>
)
