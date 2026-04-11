const Loader = ({ size = "md", fullScreen = false }) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-18 w-18",
  };

  const spinner = (
    <div
      className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}
    ></div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return <div className="flex justify-center items-center p-8">{spinner}</div>;
};

export default Loader;
