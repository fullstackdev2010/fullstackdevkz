import Image from "next/image";

export default function CaseCard({ title, role, stack, body, src }: { title:string; role:string; stack:string; body:string; src:string; }){
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-medium">{title}</h3>
        <div className="mt-1 text-xs text-slate-400">{role}</div>
        <div className="mt-1 text-xs text-cyan-300">{stack}</div>
        <p className="mt-2 text-slate-300/90 text-sm">{body}</p>
      </div>
    </article>
  );
}
