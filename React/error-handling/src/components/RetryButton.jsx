function RetryButton({ onRetry }) {
  return (
    <button
      onClick={onRetry}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Retry
    </button>
  );
}
export default RetryButton;
