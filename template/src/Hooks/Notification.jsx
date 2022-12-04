import { toast } from "react-hot-toast";

export default {
  success(message) {
    toast.success(message, {
      position: "top-center",
      duration: 4000,
    });
  },
  info(message) {
    toast.custom(message, {
      position: "top-center",
      duration: 4000,
    });
  },
  error(message) {
    toast.error(message, {
      position: "top-center",
      duration: 4000,
    });
  },
  promise(func) {
    toast.promise(
      func,
      {
        loading: "Loading",
        success: (data) => `Welcome back ${data}`,
        error: (err) => `This just happened`,
      },
      {
        style: {
          minWidth: "250px",
        },
        position: "top-center",
        success: {
          duration: 5000,
        },
      }
    );
  },
};
