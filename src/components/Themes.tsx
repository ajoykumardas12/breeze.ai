import { useState } from "react";
import themes from "../assets/themes";

interface ThemeT{
    background: string
    elements: string
    image_url: string
    placement: string
    theme: string
}

export default function Themes(){
    const [activeOption, setActiveOption] = useState("theme");
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
    const handleSelectedThemeIndex = (index: number) => {
        setSelectedThemeIndex(index);
    };

    return (
        <div className="w-[25%] flex flex-col items-center p-2">
            <div className="w-full flex flex-col items-center border border-dark py-2 rounded-lg">
                <div className="w-full px-6 flex items-center justify-around text-lg font-semibold text-black underline-offset-4 decoration-[3px]">
                    <div 
                        className={`${activeOption === "theme" ? "text-brand underline" : ""} cursor-pointer`}
                        onClick={() => setActiveOption("theme")}
                    >
                        Theme
                    </div>
                    <div
                        className={`${activeOption === "customize" ? "text-brand underline" : ""} cursor-pointer hover-underline-animation`}
                        onClick={() => setActiveOption("customize")}
                    >
                        Customize
                    </div>
                </div>
                {activeOption === "theme" && 
                    <div className="grid grid-cols-2 gap-4 max-h-[26rem] overflow-y-scroll mt-4">
                        {themes.map((theme: ThemeT, index) => {
                            return (
                                <ThemePresets 
                                    key={index}
                                    image_url={theme.image_url}
                                    theme={theme.theme}
                                    currentIndex={index}
                                    selectedIndex={selectedThemeIndex}
                                    handleSelect={handleSelectedThemeIndex}
                                />
                            )
                        })}
                    </div> 
                }
                {activeOption === "customize" &&
                    <div className="w-full px-6 py-2 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label htmlFor="product-name" className="font-semibold text-alternateMid">What is your product?</label>
                            <input type="text" id="product-name" className="px-2 py-1 outline-mid" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="placement" className="font-semibold text-alternateMid">Placement</label>
                            <input type="text" id="placement" className="px-2 py-1 outline-mid" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="background" className="font-semibold text-alternateMid">Background</label>
                            <input type="text" id="background" className="px-2 py-1 outline-mid" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="elements" className="font-semibold text-alternateMid">Elements</label>
                            <input type="text" id="elements" className="px-2 py-1 outline-mid" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="product-name" className="font-semibold text-alternateMid">Do not include <span className="text-[#808080] text-sm">(optional)</span></label>
                            <input type="text" id="product-name" className="px-2 py-1 outline-mid" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="product-name" className="font-semibold text-sm text-alternateMid">Your image description <span className="text-[#808080]">(optional)</span></label>
                            <textarea name="" id="" rows={3} className="resize-none px-2 py-1 outline-mid"></textarea>
                        </div>
                    </div>
                }
                <button className="px-2 py-1 hover:bg-alternateLight rounded-sm mt-2">
                    Need Help?
                </button>
            </div>
        </div>
    )
}

function ThemePresets(props: {image_url: string, theme: string, currentIndex:number, selectedIndex: number, handleSelect: (index: number) => void}){
    return(
        <div 
            className={`relative w-28 h-28 flex items-center justify-center cursor-pointer ${props.currentIndex === props.selectedIndex && "sepia-0 bg-brand"}`}
            onClick={() => 
                props.handleSelect(props.currentIndex)
            }
        >
            <img 
                src={props.image_url} 
                alt={props.theme} 
                className="w-[6.3rem] h-[6.3rem] "
            />
            <div 
                className="absolute w-[6.3rem] z-10 bottom-[0.35rem] text-center text-lightest bg-dark/80"
            >
                {props.theme}
            </div>
        </div>
    )
}