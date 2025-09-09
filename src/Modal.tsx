import React, { ReactNode } from 'react';
import './Modal.css';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

/**
 *
 * @param open
 * @param onClose
 * @param children
 * @param title
 * @constructor
 */
export const Modal: React.FC<ModalProps> = ({ open, onClose, children, title }) => {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {onClose && (
          <button
            onClick={onClose}
            className="closeButton"
            aria-label="Fermer"
          >
            ✕
          </button>
        )}
        {title && <h2 className="title">{title}</h2>}
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};
