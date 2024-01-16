import PropTypes from 'prop-types';

const TabItem = ({ label, active }) => {
    const hoverClass = 'text-[#696671]  hover:text-blue-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-0 hover:after:w-full after:bg-blue-900';
    const activeClass = 'text-blue-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-900';
    return (
        <li className="text-[20px]">
            <a className={`relative px-4 py-3 ${active ? activeClass : hoverClass}`} href="#">{label}</a>
        </li>
    );
}

TabItem.propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
}


const StudyTabs = () => {
    const tabs = [
        {
            id: 1,
            label: 'Study'
        },
        {
            id: 2,
            label: 'Quize'
        },
        {
            id: 3,
            label: 'Game'
        },
        {
            id: 4,
            label: 'Others'
        }
    ]
    return (
        <div className="py-10">
            <ul className="flex items-center justify-center gap-2 md:gap-8 flex-wrap">
                {
                    tabs?.map(({ id, label }) => <TabItem key={id} label={label} active={id == 1} />)
                }
            </ul>
        </div>
    );
};

export default StudyTabs;