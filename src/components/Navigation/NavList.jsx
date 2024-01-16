
const NavList = () => {
    return (
        <ul className='flex gap-5 items-center'>
            <li className='text-lg cursor-pointer hover:text-blue-900 transition-colors'>Home</li>
            <li className='text-lg cursor-pointer hover:text-blue-900 transition-colors'>FlashCard</li>
            <li className='text-lg cursor-pointer hover:text-blue-900 transition-colors'>Contact</li>
            <li className='text-lg cursor-pointer hover:text-blue-900 transition-colors'>FAQ</li>
            <li><button className='px-10 py-3 rounded-full bg-gradient-to-t from-[#06286E] to-[#164EC0] hover:from-[#164EC0] hover:to-[#06286E] text-white'>Login</button></li>
        </ul>
    );
};

export default NavList;