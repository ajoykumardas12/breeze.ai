import { useState } from "react";
import { BiUndo, BiRedo } from "react-icons/bi";
import { BsAspectRatioFill } from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function ProductEditor(){
    return (
        <div className="w-[55%] flex flex-col p-6">
            <Controls />
            <Editor />
        </div>
    )
}

const aspectList = ["1:1", "3:2", "4:5", "16:9"];

function Controls(){
    const [isAspectOpen, setIsAspectOpen] = useState(false);
    const [selectedAspectOption, setSelectedAspectOption] = useState("4:5");

    return (
        <div className="w-full flex items-center justify-between text-sm">
            <div>
                <div className="relative flex flex-col items-center rounded-md border border-1 border-dark bg-light">
                    <button 
                        className="px-2 py-1 min-w-[4rem] box-border flex items-center justify-between gap-1 tracking-wider border-light-grey-text" 
                        onClick={() => setIsAspectOpen((prev) => !prev)}
                    >
                        <BsAspectRatioFill className="text-dark" />
                        {selectedAspectOption}
                        {!isAspectOpen 
                            ? <AiFillCaretDown className="text-xs" />
                            : <AiFillCaretUp className="text-xs" />
                        }
                    </button>
                    {isAspectOpen && <div className="absolute top-7 flex flex-col items-start rounded-lg w-full bg-light">
                            {aspectList.map((item, index) => 
                                <option key={index} value={item} className="w-full p-1 rounded-md hover:bg-dark hover:text-lightest cursor-pointer" onClick={(e) => {setSelectedAspectOption((e.target as HTMLInputElement).value); setIsAspectOpen(false)}}>{item}</option>
                            )}
                        </div>
                    }
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center gap-1 p-1 pr-2 bg-light border border-dark rounded-md cursor-pointer">
                    <BiUndo className="text-xl" />
                    Undo
                </div>
                <div className="flex items-center gap-1 p-1 pr-2 bg-light border border-dark rounded-md cursor-pointer">
                    <BiRedo className="text-xl" />
                    Redo
                </div>
            </div>
            <div className="flex items-center gap-1">
                <input id="quality-checkbox" type="checkbox" value="" className="w-4 h-4 accent-brand text-dark bg-light border-darkest rounded focus:ring-dark cursor-pointer" />
                <label htmlFor="quality-checkbox" className="cursor-pointer">Increase Quality</label>
            </div>
        </div>
    )
}

function Editor(){
    return (
        <div className="flex items-center justify-center px-6 py-10">
            <div className="w-full bg-light h-96 rounded-lg border border-dark flex items-center justify-center ">
                <img src="/images/bulb.png" alt="product-image" className="w-48" />
            </div>
        </div>
    )
}