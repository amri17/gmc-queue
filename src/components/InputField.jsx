import './InputField.css';

export default function InputField({ label, value, onChange, type = 'text', error, showToggle, placeholder, defaultValue }) {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <div className={`input-wrap ${error ? 'error' : ''}`}>
        <input type={type} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} className="input" />
        {showToggle && <span className="link-inline">Lihat</span>}
      </div>
    </div>
  );
}