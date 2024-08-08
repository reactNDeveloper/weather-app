import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.container}>
      <div style={styles.modal}>
        <div style={styles.header}>{title && <h2>{title}</h2>}</div>
        <div style={styles.body}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    width: "500px",
    maxWidth: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  body: {
    marginTop: "10px",
  },
};

export default Modal;
