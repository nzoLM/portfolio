export function Navbar(){
    return (
        <nav className="flex items-center bg-gray-700 p-5">
            <div className="w-20 h-20 rounded-full bg-white self-center">
                
            </div>
                <ul className="flex gap-3 grow justify-center ">
                    <li><a href="#">Links</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
        </nav>
    );
}