import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
//@ts-ignore
import logo from '../../public/asset/logo.png'; // Import your logo image
import { DownloadButton } from '../components/component/ui/download-button';
//@ts-ignore
const RootLayout = ({ children }) => {
  useEffect(() => {
    // Set the title
    document.title = "Alok Chauhan";

    // Set the favicon using the logo image
    const setFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        favicon.href = logo; // Use the logo image as favicon
      }
    };

    setFavicon();

    // Clean up to avoid memory leaks
    return () => {
      // You can add cleanup code here if needed
    };
  }, []);

  return (
    <>
      <div className='border-2 w-full h-18 fixed bg-white z-[999]'>
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex" to="/">
            <img
              alt="Logo"
              src={logo}
              className="h-1/5 w-1/5 mr-2" // Adjust the size of the logo as needed
            />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="/contact">
              Poject
              
            </Link>
          </nav>
        </header>
        
      </div>
      <main className="">
        
        {children}
        <div className='fixed top-96 right-10 z-[999] animate-color-change-bg bg-white rounded-full' style={{ animationDuration: "70s", animationDelay: "0.9s" }}>
          <DownloadButton />
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
