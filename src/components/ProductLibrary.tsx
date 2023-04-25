import { MdPhotoLibrary } from "react-icons/md";

interface ProductImageT{
    imageSrc: string
}

export default function ProductLibrary(){
    return (
        <div className="w-[20%] p-2">
            <div className="flex flex-col items-center justify-center border border-dark rounded-lg p-2">
                <div className="flex items-center justify-center gap-2 text-lg font-semibold text-darkest mt-2">
                    <MdPhotoLibrary />
                    <div>Product Library</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-5">
                    {productImages.map((productImage: ProductImageT, index) => {
                        return (
                            <ProductImage key={index} imageSrc={productImage.imageSrc} />
                        )
                    })}
                </div>
                <div className="flex justify-center ">
                    <button className="px-2 py-1 bg-alternateLight rounded-sm m-1">
                        Load more products
                    </button>
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