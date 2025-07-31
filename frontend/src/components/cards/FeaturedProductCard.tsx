import { Card, CardBody, CardFooter, Image } from "@heroui/react"
import { Star } from "lucide-react"

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
    return (
        <Card>
            <CardBody>
                <Image src={image} />
            </CardBody>
            <CardFooter className="flex flex-col">
                <div className="flex flex-row justify-between w-full items-center">
                    <p className="text-green-700 text-xs sm:text-sm">{category}</p>
                    <p className=" flex gap-1 items-center font-bold text-sm"><Star fill="yellow" color="yellow" size={20} />{rating}</p>
                </div>

                <h1 className="text-sm sm:text-lg font-semibold  items-end">{name}</h1>
                <div className="flex gap-2 items-baseline">
                    <p >₹ {discountedPrice}</p>
                    <p className="line-through text-sm opacity-80">₹ {originalPrice}</p>
                </div>

            </CardFooter>
        </Card>
    )
}
