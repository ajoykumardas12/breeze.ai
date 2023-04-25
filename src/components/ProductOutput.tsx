import { useState } from "react";
import { FiDownload, FiStar } from "react-icons/fi";

interface OutputImage{
    imageSrc: string
}
export default function ProductOutput(props: {scrollRef: React.RefObject<HTMLDivElement>}){
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center px-6 py-10" id="product-output" ref={props.scrollRef}>
            <div className="flex ">
                {outputImages.map((opImage: OutputImage, index) => {
                    return (
                        <div 
                            key={index}
                            className={`w-24 h-24 flex items-center justify-center rounded-md cursor-pointer ${index === selectedImage && "border border-brand bg-light"}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img 
                                src={opImage.imageSrc} 
                                alt="product image"
                                className="w-20 rounded-md"
                            />
                        </div>
                    )
                })}
            </div>
            <div className="w-[26rem] h-auto bg-light rounded-lg flex items-center justify-center mt-6">
                <img src={outputImages[selectedImage].imageSrc} alt="product-image" className="rounded-lg" />
            </div>
            <div className="flex gap-4 mt-3">
                <button
                    className="px-4 py-2 text-lg bg-brand text-white hover:bg-dark rounded-sm"
                >
                    <a 
                        href={outputImages[selectedImage].imageSrc} 
                        download="Product image"
                        className="flex gap-2 items-center "
                    >
                        <FiDownload />
                        Download
                    </a>
                </button>
                <button
                    className="flex gap-2 items-center p-2 bg-alternateMid text-white hover:bg-dark rounded-sm"
                >
                    <FiStar />
                    Set as favorite
                </button>
            </div>
        </div>
    )
}

const outputImages:Array<OutputImage> = [
    {
        imageSrc: "/images/output/op1.png"
    },
    {
        imageSrc: "/images/output/op2.png"
    },
    {
        imageSrc: "/images/output/op3.png"
    },
    {
        imageSrc: "/images/output/op4.png"
    }
]