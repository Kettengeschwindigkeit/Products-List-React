import React from 'react'

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {
    return (
        <>
            <div className='fixed top-0 right-0 bottom-0 left-0 bg-black/50' onClick={onClose} />
            <div className='absolute w-[500px] p-5 top-10 left-1/2 -translate-x-1/2 bg-white rounded'>
                <h1 className='mb-2 text-center text-lg'>{title}</h1>
                {children}
            </div>
        </>
    )
}
