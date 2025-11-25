'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Blog', href: '/blog' },
    ];

    const pathName = usePathname();
    return (
        <>
            <header className="bg-gray-400">
                <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
                    <div className="flex flex-no-shrink items-stretch h-12">
                        {navLinks.map(link => {
                            const isActive = pathName == link.href || (pathName.startsWith(link.href) && link.href !== '/')
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex-no-grow flex-no-shrink relative py-2 px-4 ${isActive ? 'font-bold underline' : ''}
                                    leading-normal no-underline flex items-center hover:bg-grey-dark`}>
                                    {link.name}
                                </Link>

                            )
                        })}
                        {/* Hamburger menu code */}
                        {/* <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
                        </button> */}
                    </div>
                    {/* <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:grow">
                        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                            <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item 1</a>
                            <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item 2</a>
                            <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item 3</a>
                        </div>
                    </div> */}
                </nav>
            </header >
        </>
    )
}

export default Header;