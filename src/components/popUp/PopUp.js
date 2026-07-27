import './PopUp.css';
import { FiCheck } from 'react-icons/fi';

const PopUp = ({ close }) => {
  return (
    <div className="popup" onClick={close}>
      <div className="popup__card" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={close} aria-label="Close">
          &times;
        </button>
        <span className="popup__icon">
          <FiCheck />
        </span>
        <h3>Message sent!</h3>
        <p>Thanks for reaching out. I&apos;ve received your message and will get back to you shortly.</p>
        <button className="btn btn-primary" onClick={close}>
          Done
        </button>
      </div>
    </div>
  );
};

export default PopUp;
