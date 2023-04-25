import { BsPerson } from "react-icons/bs";

export default function Nav(){
    return (
        <div className="w-full flex justify-between items-center px-6 py-4 bg-darkest">
            <div className="bg-gradient-to-r from-[#00DDFF] to-[#FB1DD6] bg-clip-text text-transparent font-semibold tracking-tight text-[2.4rem]">
                breeze.ai
            </div>
            <div className="flex items-center gap-4 text-lightest ">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">Product Library</div>
                <div className="cursor-pointer">Help</div>
                <div className="cursor-pointer">
                    <button className="bg-brand px-2 py-1 rounded-md">Buy Credits</button>
                </div>
                <div className="text-sm p-1 bg-dark rounded-sm">
                    Credits Remaining : 26
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 border border-lightest">
                        <BsPerson className="text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}