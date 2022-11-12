import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text' className='w-full mb-2 px-4 py-2 border outline-0' placeholder='Enter product title...' value={value} onChange={changeHandler} />
            {error && <ErrorMessage error={error} />}
            <button type='submit' className='px-4 py-2 bg-yellow-400 border hover:text-white'>Create</button>
        </form>
    )
}
