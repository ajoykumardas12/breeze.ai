import { MdPhotoLibrary } from "react-icons/md";
import productImages from "../assets/productImages";

interface ProductImageT{
    imageSrc: string
}

export default function ProductLibrary(props: {productIndex: number, handleSelectedProduct: (index: number) => void}){
    return (
        <div className="w-[20%] p-2">
            <div className="flex flex-col items-center justify-center border border-dark rounded-lg p-2">
                <div className="flex items-center justify-center gap-2 text-lg font-semibold text-darkest mt-2">
                    <MdPhotoLibrary />
                    <div>Product Library</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-5">
                    <AddProduct />
                    {productImages.map((productImage: ProductImageT, index) => {
                        return (
                            <div 
                                key={index}
                                className={`w-28 h-28 flex items-center justify-center cursor-pointer`}
                                onClick={() => props.handleSelectedProduct(index)}
                            >
                                <ProductImage key={index} imageSrc={productImage.imageSrc} />
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center mt-2">
                    <button className="px-2 py-1 bg-alternateLight rounded-sm m-1">
                        Load more products
                    </button>
                </div>
            </div>
        </div>
    )
}

function AddProduct(){
    return (
        <div className="w-28 h-28 flex items-center justify-center">
            <input type="file" name="add-product" accept="image/*" id="add-product" className="hidden" />
            <label htmlFor="add-product">
                <img src="/images/add-image.png" alt="Add product" className="w-12 cursor-pointer" />
            </label>
        </div>
    )
}

function ProductImage(props: ProductImageT){
    return (
        <img 
            src={props.imageSrc} 
            alt="product image"
            className="object-fit max-w-full max-h-full"
        />
    )
}