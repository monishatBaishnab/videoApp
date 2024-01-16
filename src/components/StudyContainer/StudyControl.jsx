import { FaAngleLeft, FaAngleRight, FaRedoAlt } from "react-icons/fa";
import { MdOutlineFullscreen } from "react-icons/md";

const StudyControl = () => {
    return (
        <div className="flex items-center justify-between max-w-lg mx-auto px-10 py-5">
            <button className="text-2xl text-blue-900"><FaRedoAlt /></button>
            <div className="flex gap-2 items-center">
                <button className="text-xl p-2 bg bg-gradient-to-t from-[#06286E] to-[#164EC0] text-white rounded-full"><FaAngleLeft /></button>
                <span className="text-lg font-medium">
                    1/10
                </span>
                <button className="text-xl p-2 bg bg-gradient-to-t from-[#06286E] to-[#164EC0] text-white rounded-full"><FaAngleRight /></button>
            </div>
            <button className="text-4xl text-blue-900"><MdOutlineFullscreen /></button>
        </div>
    );
};

export default StudyControl;