
const MarkReadSvg = ({ size }: { size?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={size ? `w-${size} h-${size}` : `w-10 h-10`}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1"
        d="M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14M16 7l-4 4"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1"
        d="M7 12l4.576 4.576a.6.6 0 00.848 0L22 7"
      ></path>
    </svg>
  )
}

export default MarkReadSvg