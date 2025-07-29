import { Image, Skeleton, Spinner } from '@heroui/react';
import { useState } from 'react';

interface categoryData {
    image: string;
    name: string;
}

const CategoriesImage = ({ image, name }: categoryData) => {
    const [hasError, setHasError] = useState(false);

    return (
        <div className=" ">
            {hasError ? (
               
                    <Skeleton className="flex rounded-full w-[80px] h-[80px]" />
            ) : (
                <Image
                    className="rounded-full object-cover cursor-pointer"
                    alt={name}
                    height={80}
                    width={80}
                    src={image}
                    onError={() => setHasError(true)}
                    
                />
            )}
           <p className="mt-2 text-center text-sm">{name.split(" ")[0]}</p>
        </div>
    );
};

export default CategoriesImage;
