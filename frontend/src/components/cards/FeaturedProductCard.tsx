import { RootState } from "@/app/store"
import { addToCart } from "@/features/cart/cartSlice"
import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react"
import { Star, ShoppingBasket } from "lucide-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


interface productData {
    id: string,
    image: string,
    category: string,
    name: string,
    originalPrice: number,
    discountedPrice: number,
    rating: string,
    quantityType: string

}

export const FeaturedProductCard = ({ id, image, category, name, originalPrice, discountedPrice, rating, quantityType }: productData) => {

    const [isClicked, setIsClicked] = useState<boolean>(false)
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart)

    const productInCart = products.find((p) => p.id === id);
    const quantity = productInCart?.quantity || 0;

    const increaseCount = () => {
        dispatch(addToCart({ id, name, price: discountedPrice, quantity: 1 }));
    };

    const decreaseCount = () => {
        dispatch(addToCart({ id, name, price: discountedPrice, quantity: -1 }));
    };
    const cartClickHandler = () => {
        setIsClicked(true);

        dispatch(addToCart({ id, name, price: discountedPrice, quantity: 1 }));


    }
    console.log(products)
    console.log(isClicked)
    return (
        <Card>
            <CardBody className="relative  ">
                <Image className="" src={image} />
                {
                    isClicked ? (

                        <div className="absolute  bottom-1 right-1 z-50 w-max flex border rounded-lg border-green-500 bg-green-300">
                            <p
                                className="px-2 font-bold cursor-pointer bg-green-500 rounded-md"
                                onClick={increaseCount}
                            >
                                +
                            </p>
                            <p className="px-2">{quantity}</p>
                            <p
                                className="px-2 font-bold cursor-pointer bg-green-500 rounded-md"
                                onClick={decreaseCount}
                            >
                                -
                            </p>

                        </div>
                    ) : (
                        <Button
                            onPress={cartClickHandler}
                            size="sm"
                            className="absolute  bottom-1 right-1 z-50 w-max bg-green-600 flex items-center text-white "
                        >
                            <ShoppingBasket size={20} color="white" /> Add
                        </Button>
                    )
                }
            </CardBody>

            <CardFooter className="flex flex-col gap-2">
                <div className="flex flex-row justify-between w-full items-center">
                    <p className="text-green-700 text-xs sm:text-sm">{category}</p>
                    <p className=" flex gap-1 items-center font-bold text-sm"><Star fill="yellow" color="yellow" size={20} />{rating}</p>
                </div>

                <div className=" flex flex-col sm:flex-row justify-between w-full items-center">
                    <h1 className="text-sm sm:text-lg font-semibold">{name}</h1>
                    <div className="flex gap-2 items-baseline ">
                        <p className="font-bold" >₹ {discountedPrice}<span className="font-light text-xs">/{quantityType}</span></p>
                        <p className="line-through text-sm opacity-80">₹ {originalPrice}</p>
                    </div>
                </div>

            </CardFooter>
        </Card>
    )
}
