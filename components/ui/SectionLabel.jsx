export default function SectionLabel({ number, label }) {
  return (
    <div className="font-mono text-gold text-sm tracking-widest uppercase mb-4">
      {number} — {label}
    </div>
  )
}
