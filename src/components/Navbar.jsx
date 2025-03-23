import React from 'react';

function Navbar() {
    const items = ['Home', 'About', 'Logo', 'Projects', 'Contact'];

    return (
       <>
       <div className="links sm:fixed sm:flex sm:gap-6 text-xl font-medium justify-center items-center px-4  h-20 top-0 bg-white z-20 w-full grid grid-cols-3 ">
        {items.map((item) => (
            <React.Fragment key={item}>
                {item === 'Logo' ? (
                    <img src="/abhaLogo.png" alt="Logo" className="logo h-20" />
                ) : (
                    <a href={`#${item}`} >
                        {item}
                    </a>
                )}
            </React.Fragment>
        ))}
       </div>
       </>
    );
}
export default Navbar;
