export default function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <div className="text-3xl font-semibold text-white">{number}</div>
      <div className="mt-1 text-slate-300/80">{label}</div>
    </div>
  );
}
