export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p className="mb-4">
          <strong>Note:</strong> Alpacastakes offers high-yield staking based on
          aggressive ROI structures. Returns are highly guaranteed.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://t.me/alpacastakes" className="hover:text-primary transition-colors">
            📱 Telegram
          </a>
          <a href="https://t.me/alpacastakes" className="hover:text-primary transition-colors">
            📧 Support
          </a>
        </div>
      </div>
    </footer>
  );
}
