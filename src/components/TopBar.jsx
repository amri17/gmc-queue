import './TopBar.css';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ title, step, stepNumber, totalSteps, subtitle, onBack }) {
  const nav = useNavigate();
  return (
    <div className="topbar-container">
      {/* Desain TopBar Asli */}
      <div className="topbar">
        <button className="back" onClick={onBack || (() => nav(-1))}>←</button>
        <div className="titles">
          <h3>{title}</h3>
          {step && <span className="step">{step}</span>}
        </div>
      </div>

      {/* Progress Bar Kuning (Hanya muncul jika stepNumber dikirim) */}
      {stepNumber && totalSteps && (
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
          ></div>
        </div>
      )}

      {/* Subtitle (Hanya muncul jika subtitle dikirim) */}
      {subtitle && <p className="topbar-subtitle">{subtitle}</p>}
    </div>
  );
}