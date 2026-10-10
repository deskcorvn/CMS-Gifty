"use client";

import NutSaoChep from "@/components/NutSaoChep";

export default function KhoiPromptClient({ prompt }: { prompt: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-line bg-navy-dark">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-cream">Câu lệnh mẫu, dán vào AI</span>
        <NutSaoChep noiDung={prompt} />
      </div>
      <pre className="max-h-80 overflow-auto whitespace-pre-wrap px-4 py-4 font-mono text-[13px] leading-6 text-white/90">{prompt}</pre>
    </div>
  );
}
