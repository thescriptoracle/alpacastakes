import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { StakingPool } from '@/types/staking';

interface AmountInputProps {
  stakingAmount: string;
  setStakingAmount: (amount: string) => void;
  selectedPool: StakingPool;
  dailyEarnings: number;
  totalReturn: number;
  onBack: () => void;
  onContinue: () => void;
}

export default function AmountInput({
  stakingAmount,
  setStakingAmount,
  selectedPool,
  dailyEarnings,
  totalReturn,
  onBack,
  onContinue
}: AmountInputProps) {
  return (
    <Card className="card-crypto">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Enter Staking Amount</CardTitle>
        <p className="text-center text-muted-foreground">Minimum stake: $500</p>
      </CardHeader>
      <CardContent>
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Staking Amount (USD)</label>
            <Input
              type="number"
              placeholder="500"
              min="500"
              value={stakingAmount}
              onChange={(e) => setStakingAmount(e.target.value)}
              className="input-crypto text-center text-xl"
            />
          </div>
          
          {dailyEarnings > 0 && (
            <div className="card-crypto p-6 text-center animate-counter">
              <h3 className="text-lg font-semibold mb-4">Your Earning Projection</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Daily Earnings</p>
                  <p className="earnings-display">${dailyEarnings.toFixed(2)}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground">Total Return ({selectedPool.duration})</p>
                  <p className="text-2xl font-bold text-success">${totalReturn.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex gap-4">
            <Button variant="outline" onClick={onBack} className="flex-1">
              ← Back
            </Button>
            <Button 
              onClick={onContinue}
              disabled={!stakingAmount || parseFloat(stakingAmount) < 500}
              variant="crypto"
              size="lg"
              className="flex-1"
            >
              Continue to Payment
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}