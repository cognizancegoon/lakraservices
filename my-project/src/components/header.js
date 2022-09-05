
function Header(){
    return(
        <div className=" flex p-4 justify-between bg-gray-900 ">
        <div className="">
        <img src="https://i.pinimg.com/originals/47/43/27/4743272cb7fbed0082f76c3815b3e90e.jpg" alt="Logo" className="h-10 w-10" />
        </div>
        <div className="text-white">
            <ul className="flex space-x-9">
                <li className="hover:text-orange-500">HOME</li>
                <li className="hover:text-orange-500">SERVICES</li>
                <li className="hover:text-orange-500">CONTACT US</li>
            </ul>
        </div>
        <div>
            <button className="bg-orange-900 p-3">+9198765432</button>
        </div>
        </div>
    )
}

export default Header;