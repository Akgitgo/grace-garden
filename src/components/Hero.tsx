"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/images/Exterior-View.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg mt-32">
          Professional &amp; Compassionate
          <br />
          <span className="text-emerald-400">Grace Garden</span>
        </h1>
      </div>
    </section>
  );
}
