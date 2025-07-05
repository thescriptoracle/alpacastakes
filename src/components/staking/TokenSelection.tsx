import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CryptoToken } from '@/types/staking';
import { CRYPTO_TOKENS } from '@/constants/staking';

interface TokenSelectionProps {
  onTokenSelect: (token: CryptoToken) => void;
  onBack: () => void;
}

export default function TokenSelection({ onTokenSelect, onBack }: TokenSelectionProps) {
  const [searchToken, setSearchToken] = useState('');

  const filteredTokens = CRYPTO_TOKENS.filter(token =>
    token.symbol.toLowerCase().includes(searchToken.toLowerCase()) ||
    token.name.toLowerCase().includes(searchToken.toLowerCase())
  );

  return (
    <Card className="card-crypto">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Select Token to Stake</CardTitle>
        <p className="text-center text-muted-foreground">Choose from 50+ supported cryptocurrencies</p>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Input
            placeholder="Search tokens..."
            value={searchToken}
            onChange={(e) => setSearchToken(e.target.value)}
            className="input-crypto max-w-md mx-auto block"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
          {filteredTokens.map((token) => (
            <Card 
              key={token.symbol}
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow"
              onClick={() => onTokenSelect(token)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{token.icon}</div>
                <h3 className="font-bold">{token.symbol}</h3>
                <p className="text-sm text-muted-foreground">{token.name}</p>
                <p className="text-sm font-semibold text-primary">${token.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={onBack}>
            ← Back to Pools
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}