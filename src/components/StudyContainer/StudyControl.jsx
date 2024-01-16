import { FaAngleLeft, FaAngleRight, FaPlus, FaRedoAlt } from "react-icons/fa";
import { MdOutlineFullscreen } from "react-icons/md";
import subLogo from '../../assets/subLogo.png';

const StudyControl = () => {
    return (
        <div>
            <div className="flex items-center justify-between max-w-lg mx-auto px-10 py-5">
                <button className="text-2xl text-blue-900"><FaRedoAlt /></button>
                <div className="flex gap-2 items-center">
                    <button className="text-xl p-2 bg-gradient-to-t from-[#06286E] to-[#164EC0] text-white rounded-full"><FaAngleLeft /></button>
                    <span className="text-lg font-medium">
                        1/10
                    </span>
                    <button className="text-xl p-2 bg-gradient-to-t from-[#06286E] to-[#164EC0] text-white rounded-full"><FaAngleRight /></button>
                </div>
                <button className="text-4xl text-blue-900"><MdOutlineFullscreen /></button>
            </div>
            <div className="flex justify-between items-center">
                <div className="max-w-40">
                    <img src={subLogo} alt="subLogo" />
                </div>
                <div>
                    <button className="flex gap-1 items-center text-lg text-blue-900 font-medium flex-wrap"><span className="text-xl p-2 bg-gradient-to-t from-[#06286E] to-[#164EC0] text-white rounded-full"><FaPlus /></span> Create Flashcard</button>
                </div>
            </div>
        </div>
    );
};

export default StudyControl;