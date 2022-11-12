import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { AboutPage } from './pages/AboutPage'
import { ProductPage } from './pages/ProductPage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App

// ========================================================================================================================================================================================

// import { useState } from 'react'
// import { CreateProduct } from './components/CreateProduct'
// import { ErrorMessage } from './components/ErrorMessage'
// import { Loader } from './components/Loader'
// import { Modal } from './components/Modal'
// import { Product } from './components/Product'
// import { useProducts } from './hooks/products'
// import { IProduct } from './models'

// function App() {
//   const [modal, setModal] = useState(false)

//   const { error, loading, products, addProduct } = useProducts()

//   const createHandler = (product: IProduct) => {
//     setModal(false)
//     addProduct(product)
//   }

//   return (
//     <div className='container mx-auto max-w-2xl pt-5'>
//       {loading && <Loader />}
//       {error && <ErrorMessage error={error} />}
//       {products.map(product => <Product product={product} key={product.id} />)}
//       {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
//         <CreateProduct onCreate={createHandler} />
//       </Modal>}
//       <button className='fixed bottom-5 right-5 px-4 py-2 text-2xl text-white bg-red-700 rounded-full' onClick={() => setModal(true)}>+</button>
//     </div>
//   )
// }

// export default App

// ========================================================================================================================================================================================

// import { Product } from './components/Product';
// import { products } from'./data/products'

// function App() {
//   return (
//     <div className='container mx-auto max-w-2xl pt-5'>
//        <Product product={products[0]} />
//        <Product product={products[1]} />
//     </div>
//   )
// }

// export default App

// ========================================================================================================================================================================================

// import { createElement as element, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0)

//   return element('div', { className: 'container' }, [
//     element('h1', { className: 'font-bold', key: 1 }, `Test JSX ${count}`),
//     element ('button', { className: 'px-4 py-2 border', key: 2, onClick: () => setCount(count + 1) }, 'Click me!')
//   ])
// }

// export default App

// ========================================================================================================================================================================================

// import React from 'react';

// function App() {
//   return React.createElement('h1', {}, 'Hello from JS')
// }

// export default App
