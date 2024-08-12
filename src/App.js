import { useEffect, useState, useRef } from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Modalı aç</button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
        <button onClick={closeModal}>Kapalı</button>
      </Modal>
    </>
  )
}

function Modal({ isOpen, onClose,children }) {

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  // ref.showModal()
  return (
    <dialog ref={dialogRef} className='border-2 border-black p-4' onClose={onClose}>
      {children}
    </dialog>
  );
  
}
