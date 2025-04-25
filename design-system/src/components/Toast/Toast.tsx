// Toast.tsx
import React, { useEffect, useState } from 'react';

export type ToastProps = {
  type: 'success' | 'error' | 'info' | 'warning'; // Type of the toast
  message: string; // Message to be displayed
  duration?: number; // Duration for the toast to be visible (Optional, default 5000ms)
  dismissible?: boolean; // Whether the toast is dismissible by the user (Optional, default true)
};

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  duration = 5000, // Default duration
  dismissible = true, // Default to true, meaning it can be dismissed
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const typeStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-white',
  };

  const handleDismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg max-w-xs w-full ${typeStyles[type]} flex items-center justify-between`}
      role="alert"
    >
      <span>{message}</span>
      {dismissible && (
        <button onClick={handleDismiss} className="ml-4 text-white">
          &times;
        </button>
      )}
    </div>
  );
};

export default Toast;
