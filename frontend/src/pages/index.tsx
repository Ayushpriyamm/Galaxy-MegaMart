import { Link } from "@heroui/link";
import DefaultLayout from "@/layouts/default";
import { Instagram, Facebook, Twitter, Linkedin, ShoppingBag } from 'lucide-react';
import { Button } from "@heroui/button";
import { Avatar, AvatarGroup, Image, Spinner } from "@heroui/react";
import HeroImage from '../../public/images/heroimage.png'
import { useGetAllCategories } from "@/core/hooks/useCategory";
import CategoriesImage from "@/components/appComponents/CategoriesImage";
import { CategoryDiscountCard } from "@/components/cards/CategoryDiscountCard";
import Fruits from '../../public/images/fruits.png'
import Vegetables from '../../public/images/vegetables.png'
import logo from '../../favicon.ico'
import { motion } from 'framer-motion'
import { useGetFeaturedProduct } from "@/core/hooks/useProduct";
import { FeaturedProductCard } from "@/components/cards/FeaturedProductCard";



export default function IndexPage() {

  const { data: allCategories, isLoading, isError } = useGetAllCategories();
  const { data: featuredProducts, isPending } = useGetFeaturedProduct();

  const categories = allCategories?.data?.data
  const featuredProduct = featuredProducts?.data?.data
  console.log(featuredProduct)



  if (isLoading || isError) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.img
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={logo}
            alt="Loading"
            className=""
          />
          <motion.p
            className="text-white mt-4 text-lg tracking-wider"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loading...
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ADVERTISEMENT BANNER */}
      <section className="banner  w-full bg-yellow-400 dark:bg-red-500 text-center p-2 flex justify-center sm:justify-between items-center overflow-hidden gap-4">
        <div className="hidden sm:block underline">Call Us: +91 9876543210</div>

        <div className="w-full sm:w-[70%]  overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee hover:[animation-play-state:paused]"> 🛒 Fresh groceries delivered fast — Sign up & save today!</div>
        </div>

        <div className="hidden sm:flex gap-3 items-center">
          <Instagram size={20} color="#C13584" className="cursor-pointer hover:opacity-80" />
          <Facebook size={20} color="#1877F2" className="cursor-pointer hover:opacity-80" />
          <Twitter size={20} color="#1DA1F2" className="cursor-pointer hover:opacity-80" />
          <Linkedin size={20} color="#0077B5" className="cursor-pointer hover:opacity-80" />
        </div>
      </section>

      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-10  ">
          <div className="main-div flex flex-col sm:flex-row gap-4 items-center ">
            <div className="left-div flex flex-col sm:max-w-1/2 sm:px-10 justify-center  ">
              <div className="flex flex-col  space-y-6 py-4">

                <p className=" flex gap-2">
                  <ShoppingBag className="text-green-500" />
                  The Best online Grocery Shop
                </p>
                <h1 className=" font-semibold text-5xl">
                  Your one stop shop for
                  <span className="text-green-500">
                    {" "} Quality groceries
                  </span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla laboriosam nihil dignissimos porro dolore iusto? Minus, reprehenderit deleniti.
                  Consequatur minima delectus,
                  voluptatem sapiente illum voluptates in iste expedita magnam iure!
                </p>
              </div>

              <div className="flex flex-row py-4 space-x-2">
                <Button>Shop Now </Button>
                <Link href="/shop">View All Products</Link>
              </div>
              <div className="flex flex-row py-4 space-x-2">
                <AvatarGroup
                  isBordered
                  max={5}
                  renderCount={(count) => (
                    <p className="text-small text-foreground font-medium ms-2">+{count}K others</p>
                  )}
                  total={75}
                >
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                </AvatarGroup>
              </div>
            </div>
            <div className=" w-full h-[400px] sm:w-[550px] sm:h-[500px] ">
              <Image
                alt="HeroUI hero Image with delay"
                src={HeroImage}
                className="max-w-full max-h-full object-contain"
              />
            </div>

          </div>
        </section>

        <section className="py-10 flex flex-col justify-center ">
          <p className="text-center ">Categories</p>
          <h1 className=" text-center font-semibold text-3xl sm:text-5xl ">Featured <span className="text-green-500">Categories</span></h1>
          <div className="p-4 flex flex-wrap gap-4 justify-between ">

            {categories.map((category: any) => (
              <>
                <CategoriesImage
                  key={category._id}
                  image={category.image}
                  name={category.name}
                />

              </>

            ))}
          </div>
        </section>

        <section className="py-10 flex sm:flex-row flex-col justify-center gap-4">
          <CategoryDiscountCard
            discountValue={20}
            title="Purely Fresh Vegetables"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, exercitationem"
            link="#"
            image={Vegetables}
            bgColour="white"
          />
          <CategoryDiscountCard
            discountValue={25}
            title="Fresh Fruits, Pure Quantity"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, exercitationem"
            link="#"
            image={Fruits}
            bgColour="yellow"
          />
        </section>

        <section className="py-10 flex  flex-col justify-center gap-4">
          <p className="text-center ">Products</p>
          <h1 className=" text-center font-semibold text-3xl sm:text-5xl ">Featured <span className="text-green-500">Products</span></h1>

          <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
            {Array.isArray(featuredProduct) && featuredProduct.length > 0 ? (
              featuredProduct.map((product: any) => (
                <FeaturedProductCard
                  key={product._id}
                  image={product.image}
                  name={product.name}
                  category={product.category?.name || "Uncategorized"}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  rating={product.rating}
                  quantityType={product.quantityType}
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">No featured products found.</p>
            )}
          </div>
          <Button className=" w-max  mx-auto hover:bg-green-600">View All Products</Button>
        </section>
      </DefaultLayout >
    </>
  );
}
