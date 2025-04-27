// components/LinkedInIcon.tsx
export default function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#0A66C2"
      className="hover:opacity-80 transition"
    >
      <path
        d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 
        5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.29c-.97 
        0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 
        1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.29h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 
        0-2.11 1.43-2.11 2.9v5.6h-3v-11h2.89v1.5h.04c.4-.75 
        1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v6.46z"
      />
    </svg>
  );
}
