import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react"
import { Star, ShoppingBasket } from "lucide-react"
import { useState } from "react"

interface productData {
    image: string,
    category: string,
    name: string,
    originalPrice: number,
    discountedPrice: number,
    rating: string,
    quantityType: string

}

export const FeaturedProductCard = ({ image, category, name, originalPrice, discountedPrice, rating, quantityType }: productData) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const cartClickHandler = (e: any) => {
        setIsClicked(true);
    }

    console.log(isClicked)
    return (
        <Card>
            <CardBody className="relative  ">
                <Image className="" src={image} />
                {
                    isClicked ? (
                       <p>click kr diya</p>
                    ) : (
                         <Button onPress={cartClickHandler} size="sm" className="absolute  bottom-1 right-1 z-50 w-max bg-green-600 flex items-center text-white "><ShoppingBasket size={20} color="white" /> Add</Button>
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
                        <p className="font-bold" >₹ {discountedPrice}</p>
                        <p className="line-through text-sm opacity-80">₹ {originalPrice}</p>
                    </div>
                </div>

            </CardFooter>
        </Card>
    )
}
