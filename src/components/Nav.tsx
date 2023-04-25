export default function Nav(){
    return (
        <div className="w-full flex justify-between items-center px-6 py-4 bg-darkest">
            <div className="bg-gradient-to-r from-[#00DDFF] to-[#FB1DD6] bg-clip-text text-transparent font-semibold tracking-tight text-[2.4rem]">
                breeze.ai
            </div>
            <div className="flex text-lightest">
                <div>Home</div>
                <div>Your Library</div>
                <div>Help</div>
                <div>
                    Buy Credits
                </div>
                <div className="flex">
                    <div>
                        Img
                    </div>
                    <div>
                        <div>
                            Ajoy Kumar Das
                        </div>
                        <div>
                            Credits Remaining : 26
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}