import './PhoneFrame.css';

export default function PhoneFrame({ children, dark = false, caption }) {
  return (
    <div className="phone-wrap">
      <div className={`phone-frame ${dark ? 'dark' : ''}`}>
        <div className="status-bar">
          <span>09.41</span>
          <div className="status-icons">
            <span>5G</span>
            <span className="bars">▮▮▮▮</span>
          </div>
        </div>
        <div className="phone-content">{children}</div>
      </div>
      {caption && <p className="phone-caption">{caption}</p>}
    </div>
  );
}