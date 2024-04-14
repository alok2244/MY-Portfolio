import { Route, Routes } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages';
import About from './_root/pages/About';
import Contact from './_root/pages/Contact';

const App = () => {
  return (
    <main className='h-screen'>

      <Routes>

      <Route path="/" 
      //@ts-ignore
      element={<RootLayout />}>
          <Route index element={<Home />}/>  {/* Home route for root path */}
          <Route path="/about" element={<About />} />  {/* About route */}
          <Route path="/contact" element={<Contact />} />  {/* Contact route */}
          {/* Add more routes here as needed */}
          <Route path="*" element={<NotFound />} />  {/* Fallback route for unmatched paths */}
        </Route>
      </Routes>
    </main>
  )
}

// Assuming a NotFound component for unmatched routes
const NotFound = () => {
  return (
    <div className='top-20'>
      <h1>404: Page Not Found</h1>
      <p>The page you requested could not be found.</p>
    </div>
  );
}

export default App;
