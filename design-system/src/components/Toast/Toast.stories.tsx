
import Toast, { ToastProps } from './Toast'; // Import ToastProps

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template = (args: ToastProps) => <Toast {...args} />; // Explicitly type args

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success message!',
  duration: 3000,
  dismissible: true,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Oops, something went wrong!',
  duration: 3000,
  dismissible: true,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'Here is some info for you.',
  duration: 3000,
  dismissible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Warning! This is a cautionary message.',
  duration: 3000,
  dismissible: true,
};
