import './TopBar.css';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ title, step, onBack }) {
  const nav = useNavigate();
  return (
    <div className="topbar">
      <button className="back" onClick={onBack || (() => nav(-1))}>←</button>
      <div className="titles">
        <h3>{title}</h3>
        {step && <span className="step">{step}</span>}
      </div>
    </div>
  );
}