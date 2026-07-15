export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7C3AED] opacity-20 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#A855F7] opacity-15 blur-[140px] animate-float-slow-2" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#38BDF8] opacity-10 blur-[120px] animate-float-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#070510_80%)]" />
    </div>
  );
}
