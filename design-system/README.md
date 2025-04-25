Toast Component
This is a simple, reusable Toast component built with React and TypeScript. It's designed to display non-intrusive messages to users (like success, error, warning, or info), and it comes with options for automatic dismissal, manual dismissal, and custom themes.

Key Features
Different Toast Types: Show success, error, warning, or info messages.

Auto-Dismiss: Toast disappears after a set duration.

Manual Dismissal: Users can manually close the toast.

Responsive: Works well across different screen sizes.

Customizable: Easily change themes and styles.

Accessible: Proper ARIA roles and keyboard navigation.

Storybook Integration: See and test the component in isolation.

Installation
To get started with this component in your project:

1. Clone the Repository
First, clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/your-username/toast-component.git
2. Install Dependencies
Navigate into your project directory and install the dependencies:

bash
Copy
Edit
cd toast-component
npm install
3. Running Storybook
If you want to work with Storybook to view and interact with the Toast component, you can easily start it with:

bash
Copy
Edit
npm run storybook
Storybook will be available at http://localhost:6006.

Usage
Here’s how you can integrate the Toast component into your React app.

tsx
Copy
Edit
import React, { useState } from 'react';
import Toast from './Toast';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowToast(true)}
        className="p-4 bg-blue-500 text-white rounded-lg"
      >
        Show Toast
      </button>

      {showToast && (
        <Toast
          type="success"
          message="This is a success message!"
        />
      )}
    </div>
  );
};

export default App;
Toast Component Props

Prop	Type	Default	Description
type	`'success'	'error'	'info'
message	string	-	The message to be shown in the toast.
duration	number	5000	Time in milliseconds for the toast to be visible before it disappears (default is 5 seconds).
dismissible	boolean	true	Whether the toast can be closed manually by the user (default is true).
Example Usage
tsx
Copy
Edit
<Toast
  type="success"
  message="This is a success message!"
  duration={3000}
  dismissible={true}
/>
Auto Dismiss
By default, the toast will disappear after 5000ms, but you can customize this duration with the duration prop.

Storybook
Storybook allows you to visualize and interact with the Toast component in isolation. It's a great way to test and experiment with different props.

To start Storybook, just run:

bash
Copy
Edit
npm run storybook
Once it’s running, visit http://localhost:6006 to explore different states of the Toast component.

Contributing
We welcome contributions to this project! If you have ideas or improvements, feel free to open a pull request.

Here’s how you can contribute:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Make your changes and commit them (git commit -am 'Add new feature').

Push your branch to your fork (git push origin feature/your-feature).

Create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Big thanks to the React community for making building components this easy!

Inspired by popular Toast notification systems you see in apps.