import { MdPhotoLibrary } from "react-icons/md";

interface ProductImageT{
    imageSrc: string
}

export default function ProductLibrary(){
    return (
        <div className="w-[20%]">
            <div className="flex items-center justify-center gap-2">
                <MdPhotoLibrary />
                <div>Product Library</div>
            </div>
            <div className="grid grid-cols-2">
                {productImages.map((productImage: ProductImageT) => {
                    return (
                        <ProductImage imageSrc={productImage.imageSrc} />
                    )
                })}
            </div>
            <div className="flex justify-center ">
                <div>
                    Load more products
                </div>
            </div>
        </div>
    )
}

const productImages = [
    {
        imageSrc: "/images/sofa.png"
    },
    {
        imageSrc: "/images/purse.png"
    },
    {
        imageSrc: "/images/perfume.png"
    },
    {
        imageSrc: "/images/flower.png"
    },
    {
        imageSrc: "/images/bulb.png"
    }
]

function ProductImage(props: ProductImageT){
    return (
        <div className="w-28 h-28 flex items-center justify-center">
            <img 
                src={props.imageSrc} 
                alt="product image"
                className="object-fit max-w-full max-h-full"
            />
        </div>
    )
}