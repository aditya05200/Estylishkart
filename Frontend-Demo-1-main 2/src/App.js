import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx';
import AdminRouters from './Routers/AdminRouters.jsx';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0); // Track the progress

  useEffect(() => {
    // Set a timeout to show the popup after 6 seconds (6000 milliseconds)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 6000);

    // Simulate a progress update every second
    const progressInterval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 10); // Increment the progress
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [progress]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="App">
        {/* Vertical Progress Bar */}
        <div style={progressBarContainerStyles}>
          <div
            style={{
              ...progressBarStyles,
              height: `${progress}%`, // Dynamic height based on progress
            }}
          />
        </div>

        <Routes>
          <Route path='/*' element={<CustomerRouters />} />
          <Route path='/admin/*' element={<AdminRouters/>}></Route>
        </Routes>

        {/* Popup */}
        {showPopup && (
          <div style={popupStyles}>
            <div style={popupContentStyles}>
              <h2 style={{ fontSize: '2rem', color:'#5b2338' }}>Special Offer!</h2>
              <p style={{color:'#5b2338'}}>Enjoy a 10% discount on your first purchase!</p>
              <img 
                src='https://img.freepik.com/premium-vector/modern-fashion-sale-banner-template_75010-199.jpg?ga=GA1.1.2119177580.1724646229&semt=ais_hybrid' 
                alt='Discount Image' 
                style={{ width: '500px', height: '500px' }} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <button 
                  style={{ color: '#5b2338', fontSize: '1.2rem' }} 
                  onClick={handleClosePopup}
                >
                  Avail Offer!
                </button>
                <button 
                  style={{ color: '#5b2338', fontSize: '1.2rem' }} 
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Styling for vertical progress bar container
const progressBarContainerStyles = {
  position: 'fixed',
  top: '50%', // Center vertically
  left: '10px', // Space from left side
  transform: 'translateY(-50%)', // Center it based on height
  width: '0px', // Set width of the bar
  height: '300px', // Set the height of the progress bar
  backgroundColor: '#5b2338', // Background color of the bar
  borderRadius: '10px', // Optional: rounded corners
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)', // Optional: some shadow for effect
};

// Styling for dynamic progress bar
const progressBarStyles = {
  backgroundColor: '#5b2338', // Color of the progress bar
  width: '100%', // Full width of the container
  borderRadius: '10px', // Optional: rounded corners for the progress bar
  transition: 'height 1s ease-out', // Smooth transition for progress
};

// Styling for popup (optional, for better visuals)
const popupStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const popupContentStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
};

export default App;
