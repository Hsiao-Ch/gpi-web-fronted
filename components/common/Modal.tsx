import React from "react";
import Image from "next/image";
import styles from "@/styles/components/common/modal.module.scss";

type ModalProps = {
  imageSrc: any;
  altText: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({
  imageSrc,
  altText,
  isOpen,
  onClose,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <Image src={imageSrc} alt={altText} />
      </div>
    </div>
  );
}
