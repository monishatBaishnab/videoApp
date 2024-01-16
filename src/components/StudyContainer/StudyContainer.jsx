import { IoBulbOutline } from "react-icons/io5";
import { AiFillSound } from "react-icons/ai";

const StudyContainer = () => {
    return (
        <div className="bg-gradient-to-t to-[#051A91] from-[#2284F1] max-w-lg mx-auto min-h-72 rounded-3xl p-10">
            <div className="flex justify-between text-white">
                <button><IoBulbOutline className="text-2xl" /></button>
                <button><AiFillSound className="text-2xl" /></button>
            </div>
            <div className="mt-12">
                <h3 className="text-3xl text-center text-white font-medium">9 + 6 + 7x - 2x - 3</h3>
            </div>      
        </div>  
    );
};

export default StudyContainer;