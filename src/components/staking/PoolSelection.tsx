import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StakingPool } from "@/types/staking";
import { STAKING_POOLS } from "@/constants/staking";

interface PoolSelectionProps {
  onPoolSelect: (pool: StakingPool) => void;
}

export default function PoolSelection({ onPoolSelect }: PoolSelectionProps) {
  return (
    <Card className="card-crypto">
      <CardHeader>
        <CardTitle className="text-3xl text-center">
          Choose Your Staking Pool
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Select your preferred staking duration and ROI
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAKING_POOLS.map((pool) => (
            <Card
              key={pool.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow relative ${
                pool.popular ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => onPoolSelect(pool)}
            >
              {pool.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Popular
                </Badge>
              )}
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{pool.duration}</h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {pool.dailyROI}%
                </div>
                <p className="text-sm text-muted-foreground mb-4">Daily ROI</p>
                <p className="text-success font-semibold">{pool.label}</p>
                <div className="mt-4 text-sm">
                  <p>
                    $take ={" "}
                    <span className="text-success font-bold">
                      ${((500 * pool.dailyROI) / 100).toFixed(0)}/day
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
