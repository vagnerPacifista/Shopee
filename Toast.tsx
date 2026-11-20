import { CheckIcon } from "./Icons";

export default function Toast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div
      key={message}
      className="toast-in fixed bottom-8 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-2.5 rounded-sm bg-sp-ink/92 px-5 py-3 text-white shadow-[0_14px_40px_rgb(38_32_29/0.35)] backdrop-blur-sm"
      role="status"
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sp-green">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
      <span className="whitespace-nowrap font-body text-sm font-bold">{message}</span>
    </div>
  );
}
