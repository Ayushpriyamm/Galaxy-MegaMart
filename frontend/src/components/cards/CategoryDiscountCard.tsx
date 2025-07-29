import { Button, Card } from "@heroui/react"

interface componentData {
    discountValue: number,
    title: string,
    description: string,
    link: string,
    image: string,
    bgColour: string,
}

const bgClassMap: Record<string, string>={
    "white": "bg-white",
    "yellow": "bg-yellow-500",
    "green": "bg-green-500",
}

export const CategoryDiscountCard = ({ discountValue, title, description, link, image, bgColour }: componentData) => {
    const bgClass=bgClassMap[bgColour]
    return (
        <Card
            className={`flex flex-row items-center justify-between p-4  bg-right bg-contain bg-no-repeat text-black  ${bgClass}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-white/30 sm:bg-transparent z-0"/>
            <div className="relative z-10 flex flex-col sm:w-1/2 space-y-4 ">
                <h1 className="px-3 py-1 font-bold bg-amber-200 w-max rounded-lg">Flat {discountValue}% Discount</h1>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className=" text-sm opacity-90">{description}</p>

                <Button href={link} className="bg-green-600  text-xl font-semibold flex items-center">
                    Shop Now <span className="text-3xl ">&rarr;</span>
                </Button>
            </div>


        </Card>
    )
}
