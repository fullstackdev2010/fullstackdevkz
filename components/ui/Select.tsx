// components/ui/Select.tsx
"use client";

import * as React from "react";
import clsx from "clsx";

type Option = { label: string; value: string } | string;

function toOpt(o: Option): { label: string; value: string } {
  return typeof o === "string" ? { label: o, value: o } : o;
}

export type SelectProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  options: Option[];
  className?: string;
  disabled?: boolean;
};

export default function Select({
  id,
  name,
  value,
  onChange,
  placeholder = "Select…",
  options,
  className,
  disabled,
}: SelectProps) {
  const opts = React.useMemo(() => options.map(toOpt), [options]);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(() =>
    Math.max(0, opts.findIndex((o) => o.value === value))
  );
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);

  const selected = opts.find((o) => o.value === value) || null;

  const close = React.useCallback(() => {
    setOpen(false);
    // return focus to button
    buttonRef.current?.focus();
  }, []);

  // Close on outside click / escape
  React.useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!buttonRef.current && !listRef.current) return;
      const t = e.target as Node;
      if (
        buttonRef.current?.contains(t) ||
        listRef.current?.contains(t)
      ) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Keyboard on combobox
  const onButtonKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setOpen((o) => !o);
      // set active to current selection
      const idx = Math.max(0, opts.findIndex((o) => o.value === value));
      setActiveIndex(idx);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(opts.length - 1, (i ?? -1) + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.max(0, (i ?? 0) - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex(opts.length - 1);
    }
  };

  const commit = (idx: number) => {
    const next = opts[idx];
    if (!next) return;
    onChange(next.value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  // Keyboard on listbox
  const onListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(opts.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(opts.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commit(activeIndex);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  // Scroll active option into view when it changes
  React.useEffect(() => {
    if (!open) return;
    const li = listRef.current?.querySelector<HTMLLIElement>(`[data-index="${activeIndex}"]`);
    li?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const baseField =
    "w-full rounded-xl border border-white/25 bg-white/10 text-white " +
    "px-3 py-2 pr-10 outline-none focus:border-white/60 focus:ring-0 " +
    "transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const chevron =
    "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 opacity-70";
  const popover =
    "absolute z-50 mt-1 w-full overflow-auto rounded-xl border border-white/20 " +
    "bg-[color:var(--surface)]/98 shadow-[var(--shadow-md)] max-h-60 backdrop-blur-sm";

  return (
    <div className={clsx("relative", className)}>
      {/* Hidden input for form submit compatibility */}
      {name && <input type="hidden" name={name} value={value} />}
      {/* Combobox button */}
      <button
        id={id}
        ref={buttonRef}
        type="button"
        className={baseField}
        role="combobox"
        aria-controls={id ? `${id}-listbox` : undefined}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-activedescendant={
          open ? (id ? `${id}-opt-${activeIndex}` : undefined) : undefined
        }
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        onKeyDown={onButtonKeyDown}
      >
        <span className={clsx("block text-left", !selected && "text-white/60")}>
          {selected ? selected.label : placeholder}
        </span>
      </button>

      {/* Chevron */}
      <div className={chevron} aria-hidden>
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </div>

      {/* Popover listbox */}
      {open && (
        <ul
          ref={listRef}
          id={id ? `${id}-listbox` : undefined}
          role="listbox"
          tabIndex={-1}
          className={popover}
          onKeyDown={onListKeyDown}
        >
          {opts.map((o, i) => {
            const isActive = i === activeIndex;
            const isSelected = o.value === value;
            return (
              <li
                key={o.value}
                id={id ? `${id}-opt-${i}` : undefined}
                data-index={i}
                role="option"
                aria-selected={isSelected}
                className={clsx(
                  "cursor-pointer px-3 py-2 text-sm",
                  isActive ? "bg-white/10" : "bg-transparent",
                  isSelected ? "text-white" : "text-white/90",
                )}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => commit(i)}
              >
                {o.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
