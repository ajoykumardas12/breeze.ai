import ProductLibrary from "./ProductLibrary";
import ProductEditor from "./ProductEditor";
import Themes from "./Themes";
import ProductOutput from "./ProductOutput";
import { useRef, useState } from "react";

export default function Home(){
    const [selectedProductIndex, setSelectedProductIndex] = useState(4);
    const handleSelectedProduct = (index: number) => {
        setSelectedProductIndex(index);
    };

    const scrollRef = useRef<null | HTMLDivElement>(null);

    const handleClick = () => {
      scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="min-h-[calc(100vh-6rem)] mt-6 scroll-smooth">
            <div className="flex ">
                <ProductLibrary 
                    productIndex={selectedProductIndex} 
                    handleSelectedProduct={handleSelectedProduct} 
                />
                <ProductEditor
                    productIndex={selectedProductIndex}
                    handleScroll={handleClick}
                />
                <Themes />
            </div>
            <div>
                <ProductOutput
                    scrollRef={scrollRef}
                />
            </div>
        </div>
    )
}