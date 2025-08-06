import { RootState } from '@/app/store'
import DefaultLayout from '@/layouts/default'
import { useSelector } from 'react-redux'
const Cart = () => {
    const {products}=useSelector((state:RootState)=>state.cart)
  return (

    <DefaultLayout>
        <div className="">
            {products.map((product) => (
               <div className=" flex gap-4" key={product.id}>
                 <p >Product name : {product.name} </p>
                 <p>Total Quantity: {product.quantity}</p>
               </div>
               
            ))}
        </div>
    </DefaultLayout>
  )
}

export default Cart