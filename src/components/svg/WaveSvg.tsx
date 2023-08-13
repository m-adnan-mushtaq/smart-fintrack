type Color="#37bcf1"|"#e779c1"|"#f1c40e"

function Wave({color}:{color:Color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
      transform="rotate(180)"
      version="1.1"
      viewBox="0 0 1440 280"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="#1a103c"></stop>
          <stop offset="100%" stopColor={color}></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        d="M0 56l17.1 4.7C34.3 65 69 75 103 84c34.1 9 68 19 103 37.3 34 18.7 68 46.7 103 28C342.9 131 377 65 411 70c34.7 5 69 79 103 121.3 34.6 41.7 69 51.7 103 23.4 34.4-27.7 69-93.7 103-98 34.3-4.7 69 51.3 103 60.6 34.1 9.7 68-28.3 103-51.3 34-23 68-33 103-46.7 33.9-14.3 68-32.3 102-18.6 34.7 14.3 69 60.3 103 79.3 34.6 19 69 9 103-9.3 34.4-18.7 69-46.7 103-42 34.3 4.3 69 42.3 103 37.3 34.1-5 68-51 103-56 34-5 68 33 103 51.3 33.9 18.7 68 18.7 102 4.7 34.7-14 69-42 103-28 34.6 14 69 70 103 102.7 34.4 32.3 69 42.3 103 42 34.3.3 69-9.7 103-23.4 34.1-14.3 68-32.3 103-42 34-9.3 68-9.3 85-9.3h17.6v112H0z"
      ></path>
    </svg>
  );
}

export default Wave;
