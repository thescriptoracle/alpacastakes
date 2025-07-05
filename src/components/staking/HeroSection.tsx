import heroImage from '@/assets/hero-crypto.jpg';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 glow-text">
          Alpacastakes
        </h1>
        <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          High-Yield Crypto Staking Platform - Earn daily returns starting from 5% daily
        </p>
        <div className="flex justify-center gap-8 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <span>Minimum $500 stake</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <span>Daily payouts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <span>50+ supported tokens</span>
          </div>
        </div>
      </div>
    </section>
  );
}