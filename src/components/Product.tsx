import React from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = React.useState(false)

  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
  const btnClasses = ['px-4 py-2 border', btnBgClassName]

  return (
    <div className='flex flex-col items-center mb-2 px-4 py-2 border rounded'>
      <img src={product.image} alt={product.title} className='w-1/6' />
      <p>{product.title}</p>
      <p className='font-bold'>{product.price}</p>
      <button className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>{details ? 'Hide details' : 'Show details'}</button>
      {details && <div>
        <p>{product.description}</p>
        <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
      </div>}
    </div>
  )
}

// ========================================================================================================================================================================================

// import React from 'react'
// import { IProduct } from '../models'

// interface ProductProps {
//   product: IProduct
// }

// export function Product({ product }: ProductProps) {
//   const [details, setDetails] = React.useState(false)

//   return (
//     <div className='flex flex-col items-center mb-2 px-4 py-2 border rounded'>
//       <img src={product.image} alt={product.title} className='w-1/6' />
//       <p>{product.title}</p>
//       <p className='font-bold'>{product.price}</p>
//       <button className='px-4 py-2 bg-yellow-400 border' onClick={() => setDetails(true)}>Show details</button>
//       <button className='px-4 py-2 bg-blue-400 border' onClick={() => setDetails(false)}>Show details</button>
//       {details && <div><p>{product.description}</p></div>}
//     </div>
//   )
// }

// ========================================================================================================================================================================================

// import React from 'react'
// import { IProduct } from '../models'

// interface ProductProps {
//   product: IProduct
// }

// export function Product(props: ProductProps) {
//     console.log(props)
//   return (
//     <div className='flex flex-col items-center mb-2 px-4 py-2 border rounded'>{props.product.title}</div>
//   )
// }
