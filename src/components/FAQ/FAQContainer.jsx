import { FaAngleDown } from "react-icons/fa";


const FAQContainer = () => {
    const FAQData = [
        {
            id: 1,
            label: 'Can education flashcards be used for all age groups?'
        },
        {
            id: 2,
            label: 'How do education flashcards work?'
        },
        {
            id: 3,
            label: 'Can education flashcards be used for test preparation?'
        },
    ]
    return (
        <div className="container">
            <h1 className="text-4xl font-medium text-gradient">FAQ</h1>
            <div className="max-w-3xl py-10 space-y-4">

                {
                    FAQData?.map(item =>
                        <div key={item?.id} className="px-6 py-4 rounded-lg border border-[#217EEC] text-[#28262C] flex justify-between items-center cursor-pointer">
                            <p className="font-medium text-lg">{item?.label}</p>
                            <FaAngleDown className="text-2xl" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FAQContainer;