import Star from "../../public/wide.svg";
import Image from 'next/image';

export function Hero(){
    return(
        <div className="flex grow text-black items-center justify-center bg-[#A79EA1]">
            <div className="w-1/2 p-10 flex items-center justify-center">
                <Image alt="Star icon" src={Star} className="w-3/5 items-center"/>
            </div>
            <div className="text-right w-1/2 h-full p-5">
                <h1 className="text-7xl">DÉVELOPPEUR WEB - FULL STACK</h1>
            </div>
        </div>
    )
}