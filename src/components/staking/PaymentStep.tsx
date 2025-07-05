import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CryptoToken } from "@/types/staking";
import { WALLET_ADDRESSES } from "@/constants/staking";

interface PaymentStepProps {
  selectedToken: CryptoToken | null;
  stakingAmount: string;
  countdown: number;
  onStartNew: () => void;
}

export default function PaymentStep({
  selectedToken,
  stakingAmount,
  countdown,
  onStartNew,
}: PaymentStepProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="card-crypto">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Complete Payment</CardTitle>
        <div className="text-center">
          <Badge variant="destructive" className="text-lg px-4 py-2">
            Time Remaining: {formatTime(countdown)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="card-crypto p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Send Payment To:</h3>
            {selectedToken && WALLET_ADDRESSES[selectedToken.symbol] ? (
              <>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm break-all">
                    {WALLET_ADDRESSES[selectedToken.symbol]}
                  </p>
                </div>
                <div className="w-32 h-32 bg-muted mx-auto rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">
                    <img src="/favicon.ico" alt="Alpacalogo" width="100px" />
                  </span>
                </div>
                <p className="text-lg font-semibold">
                  Send exactly:{" "}
                  <span className="text-primary">
                    ${stakingAmount} worth of {selectedToken?.symbol}
                  </span>
                </p>
              </>
            ) : (
              <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
                <p className="text-destructive font-semibold">
                  {selectedToken?.symbol} payments are currently not supported.
                  Please select a different token.
                </p>
              </div>
            )}
          </div>

          <div className="card-crypto p-6">
            <h3 className="text-lg font-bold mb-4">After Payment:</h3>
            <ol className="space-y-2 text-sm">
              <li>
                1. Submit your Transaction ID and Screenshot to our Telegram
                Support
              </li>
              <li>2. Your staking will be activated within 3 hours</li>
              <li>3. Daily earnings start the next day</li>
              <li>4. Full returns paid at the end of staking period</li>
            </ol>
          </div>

          <div className="text-center">
            <Button variant="success" size="lg" className="mr-4">
              <a href="https://t.me/alpacastakes">↗️ Submit Transaction ID</a>
            </Button>
            <Button variant="outline" onClick={onStartNew}>
              Start New Stake
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
