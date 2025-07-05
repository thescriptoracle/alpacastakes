import { useState, useEffect } from 'react';
import HeroSection from './staking/HeroSection';
import PoolSelection from './staking/PoolSelection';
import TokenSelection from './staking/TokenSelection';
import AmountInput from './staking/AmountInput';
import PaymentStep from './staking/PaymentStep';
import Footer from './staking/Footer';
import { StakingPool, CryptoToken } from '@/types/staking';

export default function StakingPlatform() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPool, setSelectedPool] = useState<StakingPool | null>(null);
  const [selectedToken, setSelectedToken] = useState<CryptoToken | null>(null);
  const [stakingAmount, setStakingAmount] = useState('');
  const [dailyEarnings, setDailyEarnings] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [countdown, setCountdown] = useState(900); // 15 minutes

  // Calculate earnings when amount or pool changes
  useEffect(() => {
    if (selectedPool && stakingAmount && parseFloat(stakingAmount) >= 500) {
      const amount = parseFloat(stakingAmount);
      const daily = (amount * selectedPool.dailyROI) / 100;
      const days = selectedPool.id === '1month' ? 30 : 
                   selectedPool.id === '3months' ? 90 :
                   selectedPool.id === '6months' ? 180 : 365;
      
      setDailyEarnings(daily);
      setTotalReturn(daily * days);
    } else {
      setDailyEarnings(0);
      setTotalReturn(0);
    }
  }, [selectedPool, stakingAmount]);

  // Countdown timer for payment
  useEffect(() => {
    if (currentStep === 4 && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentStep, countdown]);

  const handlePoolSelect = (pool: StakingPool) => {
    setSelectedPool(pool);
    setCurrentStep(2);
  };

  const handleTokenSelect = (token: CryptoToken) => {
    setSelectedToken(token);
    setCurrentStep(3);
  };

  const handleAmountSubmit = () => {
    if (parseFloat(stakingAmount) >= 500) {
      setCurrentStep(4);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {currentStep === 1 && (
            <PoolSelection onPoolSelect={handlePoolSelect} />
          )}

          {currentStep === 2 && selectedPool && (
            <TokenSelection 
              onTokenSelect={handleTokenSelect}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && selectedToken && selectedPool && (
            <AmountInput
              stakingAmount={stakingAmount}
              setStakingAmount={setStakingAmount}
              selectedPool={selectedPool}
              dailyEarnings={dailyEarnings}
              totalReturn={totalReturn}
              onBack={() => setCurrentStep(2)}
              onContinue={handleAmountSubmit}
            />
          )}

          {currentStep === 4 && (
            <PaymentStep
              selectedToken={selectedToken}
              stakingAmount={stakingAmount}
              countdown={countdown}
              onStartNew={() => setCurrentStep(1)}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}