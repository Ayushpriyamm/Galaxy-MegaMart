import { useGetAllProducts } from "@/core/hooks/useProduct";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

const Shop = () => {
    const { data: allProducts, isLoading, isError } = useGetAllProducts();

    console.log("✅ Full response from API", allProducts);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;


    console.log(allProducts?.data.data[0])
    const products = allProducts?.data?.data

    return (
        <DefaultLayout>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {products.map((item: any) => (
                    /* eslint-disable no-console */
                    <Card key={item._id}
                        isPressable shadow="sm"
                        onPress={() => console.log("item pressed")}
                    >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                alt={item.name}
                                className="w-full object-cover h-[140px] sm:h-[250px]"
                                radius="lg"
                                shadow="sm"
                                src={item.image}
                                width="100%"
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between space-x-2">
                            <b>{item.name}</b>
                            <div className="flex flex-col">
                                <p className="text-default-700">₹{item.discountedPrice}/{item.quantityType}</p>
                                <p className="text-default-500 line-through ">₹{item.originalPrice}/{item.quantityType}</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </DefaultLayout>
    );
};

export default Shop;
