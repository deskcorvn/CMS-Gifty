type Ten =
  | "arrow"
  | "spark"
  | "check"
  | "clock"
  | "calendar"
  | "book"
  | "plan"
  | "assistant"
  | "profile"
  | "image"
  | "mail"
  | "gift";
const duong: Record<Ten, string> = {
  gift: "M3 8h18v4H3V8Zm2 4v9h14v-9M12 8v13M12 8C4 8 4 1 8 3c2 1 4 5 4 5Zm0 0c8 0 8-7 4-5-2 1-4 5-4 5Z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  spark: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z",
  check: "m5 12 4 4L19 6",
  clock: "M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  calendar:
    "M8 3v4m8-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Zm3 9h2m4 0h2m-8 3h2",
  book: "M12 5v15M3 4c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2V4Z",
  plan: "M9 5h11M9 12h11M9 19h11M3 5l1 1 2-2M3 12l1 1 2-2M3 19l1 1 2-2",
  assistant:
    "M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9l-5 3v-3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 5h8m-8 4h5",
  profile: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-2a8 8 0 0 1 16 0v2",
  image: "M4 3h16v18H4V3Zm0 14 5-5 4 4 3-3 4 4M15 7h.01",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
};
export default function BieuTuong({
  ten,
  className = "",
  size = 22,
}: {
  ten: Ten;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={duong[ten]} />
    </svg>
  );
}
