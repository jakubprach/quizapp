import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Quiz from '../components/Quiz/Quiz_Math_Easy';

export const Home = () => {
    return (
      <>
        <div className="App">
          <Quiz></Quiz>
          <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
        </div>
        </>
      );
  }