import ProductLibrary from "./ProductLibrary";
import ProductEditor from "./ProductEditor";
import Themes from "./Themes";
import ProductOutput from "./ProductOutput";

export default function Home(){
    return (
        <div className="min-h-[calc(100vh-6rem)] mt-6">
            <div className="flex ">
                <ProductLibrary />
                <ProductEditor />
                <Themes />
            </div>
            <div>
                <ProductOutput />
            </div>
        </div>
    )
}