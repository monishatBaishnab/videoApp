import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";

const SubNav = () => {
    return (
        <div className="container">
            <ul className="flex items-center gap-2 flex-wrap">
                <li className="flex items-center text-xl gap-2 text-[#696671]"><GoHome /> <FaAngleRight className="text-blue-900 text-xl" /></li>
                <li className="flex items-center text-lg gap-2 text-[#696671]"><a href="#">FlashCard</a> <FaAngleRight className="text-blue-900 text-xl" /></li>
                <li className="flex items-center text-lg gap-2 text-[#696671]"><a href="#">Mathematics</a> <FaAngleRight className="text-blue-900 text-xl" /></li>
                <li className="flex items-center text-lg gap-2 text-blue-900">Relation and Function</li>
            </ul>
        </div>
    );
};

export default SubNav;