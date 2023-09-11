const SkeletonStrips = ({ count }: { count: number }) => {
  return (
    <ul className="w-full  mx-auto space-y-3 my-4">
      {(new Array(count).fill(1)).map((_, i) => (
        <li key={i} className="w-full h-4 bg-blue-950 rounded-md"></li>
      ))}
    </ul>
  );
};

export default SkeletonStrips;
