const SkeletonStrips = ({ count }: { count: number }) => {
  return (
    <ul className="w-full max-w-screen-md mx-auto space-y-3">
      {new Array(count).map((_, i) => (
        <li key={i} className="w-full h-4 bg-gray-700 rounded-md"></li>
      ))}
    </ul>
  );
};

export default SkeletonStrips;
