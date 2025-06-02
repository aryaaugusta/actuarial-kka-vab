
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function RetirementCalculator() {
  const [age, setAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [result, setResult] = useState<number | null>(null);

  const calculateRetirement = () => {
    // Simple compound interest formula
    const yearsToRetirement = retirementAge - age;
    const monthsToRetirement = yearsToRetirement * 12;
    const monthlyRate = expectedReturn / 100 / 12;
    
    // Calculate future value of current savings
    const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, monthsToRetirement);
    
    // Calculate future value of monthly contributions
    const futureValueOfContributions = monthlyContribution * (Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate;
    
    // Total retirement savings
    const totalRetirementSavings = futureValueOfCurrentSavings + futureValueOfContributions;
    
    setResult(Math.round(totalRetirementSavings));
  };

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-navy-700 dark:text-white">Retirement Calculator</CardTitle>
        <CardDescription>Estimate your retirement savings based on your current situation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="age">Current Age: {age}</Label>
          </div>
          <Slider
            id="age"
            min={18}
            max={80}
            step={1}
            value={[age]}
            onValueChange={(value) => setAge(value[0])}
            className="[&>span:first-child]:bg-navy-600"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="retirement-age">Retirement Age: {retirementAge}</Label>
          </div>
          <Slider
            id="retirement-age"
            min={Math.max(age + 1, 50)}
            max={90}
            step={1}
            value={[retirementAge]}
            onValueChange={(value) => setRetirementAge(value[0])}
            className="[&>span:first-child]:bg-navy-600"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="current-savings">Current Savings</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <Input
              id="current-savings"
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="pl-8"
              min={0}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthly-contribution">Monthly Contribution</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <Input
              id="monthly-contribution"
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="pl-8"
              min={0}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="expected-return">Expected Annual Return: {expectedReturn}%</Label>
          </div>
          <Slider
            id="expected-return"
            min={1}
            max={15}
            step={0.5}
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            className="[&>span:first-child]:bg-navy-600"
          />
        </div>

        {result !== null && (
          <div className="p-4 bg-navy-50 dark:bg-navy-800 rounded-md">
            <p className="text-navy-700 dark:text-white font-medium">Estimated retirement savings:</p>
            <p className="text-2xl font-bold text-gold-600">{formatCurrency(result)}</p>
            <p className="text-sm text-navy-500 dark:text-gray-400 mt-2">
              This is an estimate based on the information provided. Actual results may vary due to inflation, tax changes, and other factors.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={calculateRetirement}
          className="w-full bg-navy-600 hover:bg-navy-700 text-white"
        >
          Calculate
        </Button>
      </CardFooter>
    </Card>
  );
}
