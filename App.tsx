import React, { useState, useEffect, useMemo } from 'react';
import { CALCULATOR_CATEGORIES } from './constants';
import type { Calculator } from './types';
import CalculatorPage from './components/CalculatorPage';
import Card from './components/Card';
import ComingSoon from './components/calculators/ComingSoon';
import { CalculatorIcon } from './components/icons';

// Implemented Calculators
import BmiCalculator from './components/calculators/BmiCalculator';
import DueDateCalculator from './components/calculators/DueDateCalculator';
import PercentageCalculator from './components/calculators/PercentageCalculator';
import AreaCalculator from './components/calculators/AreaCalculator';
import AgeCalculator from './components/calculators/AgeCalculator';
import FuelCostCalculator from './components/calculators/FuelCostCalculator';
import CalorieCalculator from './components/calculators/CalorieCalculator';
import BmrCalculator from './components/calculators/BmrCalculator';
import BodyFatCalculator from './components/calculators/BodyFatCalculator';
import PaceCalculator from './components/calculators/PaceCalculator';
import IdealWeightCalculator from './components/calculators/IdealWeightCalculator';
import OneRepMaxCalculator from './components/calculators/OneRepMaxCalculator';
import TargetHeartRateCalculator from './components/calculators/TargetHeartRateCalculator';
import OvulationCalculator from './components/calculators/OvulationCalculator';
import ScientificCalculator from './components/calculators/ScientificCalculator';
import RandomNumberGenerator from './components/calculators/RandomNumberGenerator';
import ExponentCalculator from './components/calculators/ExponentCalculator';
import LogCalculator from './components/calculators/LogCalculator';
import VolumeCalculator from './components/calculators/VolumeCalculator';
import TriangleCalculator from './components/calculators/TriangleCalculator';
import CircleCalculator from './components/calculators/CircleCalculator';
import SlopeCalculator from './components/calculators/SlopeCalculator';
import DistanceCalculator from './components/calculators/DistanceCalculator';
import DateCalculator from './components/calculators/DateCalculator';
import TimeCalculator from './components/calculators/TimeCalculator';
import HoursCalculator from './components/calculators/HoursCalculator';
import GasMileageCalculator from './components/calculators/GasMileageCalculator';
import HorsepowerCalculator from './components/calculators/HorsepowerCalculator';

// Newly Implemented Calculators
import ArmyBodyFatCalculator from './components/calculators/ArmyBodyFatCalculator';
import LeanBodyMassCalculator from './components/calculators/LeanBodyMassCalculator';
import HealthyWeightCalculator from './components/calculators/HealthyWeightCalculator';
import CaloriesBurnedCalculator from './components/calculators/CaloriesBurnedCalculator';
import PregnancyCalculator from './components/calculators/PregnancyCalculator';
import PregnancyWeightGainCalculator from './components/calculators/PregnancyWeightGainCalculator';
import PeriodCalculator from './components/calculators/PeriodCalculator';
import FractionCalculator from './components/calculators/FractionCalculator';
import PercentErrorCalculator from './components/calculators/PercentErrorCalculator';
import BinaryCalculator from './components/calculators/BinaryCalculator';
import HalfLifeCalculator from './components/calculators/HalfLifeCalculator';
import QuadraticFormulaCalculator from './components/calculators/QuadraticFormulaCalculator';
import RatioCalculator from './components/calculators/RatioCalculator';
import RootCalculator from './components/calculators/RootCalculator';
import LcmCalculator from './components/calculators/LcmCalculator';
import GcfCalculator from './components/calculators/GcfCalculator';
import FactorCalculator from './components/calculators/FactorCalculator';
import RoundingCalculator from './components/calculators/RoundingCalculator';


const AdBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-gray-800 text-white flex items-center justify-center text-sm z-50">
        <p>Test Banner Ad (ca-app-pub-3940256099942544/6300978111)</p>
    </div>
);

const AdOverlay: React.FC<{ title: string; adId: string; onClose: () => void }> = ({ title, adId, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{adId}</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Close Ad
                </button>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [currentPage, setCurrentPage] = useState('home');
    const [pageKey, setPageKey] = useState(0); 
    const [showInterstitial, setShowInterstitial] = useState(false);
    const [showRewarded, setShowRewarded] = useState(false);
    const [nextPage, setNextPage] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    const allCalculators = useMemo(() => 
        CALCULATOR_CATEGORIES.flatMap(category => category.calculators)
    , []);

    const currentCalculator: Calculator | undefined = useMemo(() =>
        allCalculators.find(calc => calc.id === currentPage)
    , [currentPage, allCalculators]);

    const handleNavigate = (pageId: string) => {
        setShowInterstitial(true);
        setNextPage(pageId);
    };

    const handleBack = () => {
        setShowRewarded(true);
        setNextPage('home');
    };

    const closeInterstitial = () => {
        setShowInterstitial(false);
        if (nextPage) {
            setCurrentPage(nextPage);
            setPageKey(prev => prev + 1);
            setNextPage(null);
        }
    };
    
    const closeRewarded = () => {
        setShowRewarded(false);
         if (nextPage) {
            setCurrentPage(nextPage);
            setPageKey(prev => prev + 1);
            setNextPage(null);
        }
    };

    const renderCalculatorPage = () => {
        if (!currentCalculator) return <ComingSoon />;

        switch (currentCalculator.id) {
            // == Previously Implemented ==
            case 'bmi': return <BmiCalculator />;
            case 'dueDate': return <DueDateCalculator />;
            case 'percentage': return <PercentageCalculator />;
            case 'area': return <AreaCalculator />;
            case 'age': return <AgeCalculator />;
            case 'fuelCost': return <FuelCostCalculator />;
            case 'calorie': return <CalorieCalculator />;
            case 'bmr': return <BmrCalculator />;
            case 'bodyFat': return <BodyFatCalculator />;
            case 'pace': return <PaceCalculator />;
            case 'idealWeight': return <IdealWeightCalculator />;
            case 'oneRepMax': return <OneRepMaxCalculator />;
            case 'targetHeartRate': return <TargetHeartRateCalculator />;
            case 'ovulation': return <OvulationCalculator />;
            case 'scientific': return <ScientificCalculator />;
            case 'randomNumber': return <RandomNumberGenerator />;
            case 'exponent': return <ExponentCalculator />;
            case 'log': return <LogCalculator />;
            case 'volume': return <VolumeCalculator />;
            case 'triangle': return <TriangleCalculator />;
            case 'circle': return <CircleCalculator />;
            case 'slope': return <SlopeCalculator />;
            case 'distance': return <DistanceCalculator />;
            case 'date': return <DateCalculator />;
            case 'time': return <TimeCalculator />;
            case 'hours': return <HoursCalculator />;
            case 'gasMileage': return <GasMileageCalculator />;
            case 'horsepower': return <HorsepowerCalculator />;

            // == Newly Implemented ==
            // Fitness
            case 'armyBodyFat': return <ArmyBodyFatCalculator />;
            case 'leanBodyMass': return <LeanBodyMassCalculator />;
            case 'healthyWeight': return <HealthyWeightCalculator />;
            case 'caloriesBurned': return <CaloriesBurnedCalculator />;
            
            // Pregnancy
            case 'pregnancy': return <PregnancyCalculator />;
            case 'pregnancyWeightGain': return <PregnancyWeightGainCalculator />;
            case 'period': return <PeriodCalculator />;

            // Math
            case 'fraction': return <FractionCalculator />;
            case 'percentError': return <PercentErrorCalculator />;
            case 'binary': return <BinaryCalculator />;
            case 'hex': return <BinaryCalculator />; // Covered by BinaryCalculator
            case 'halfLife': return <HalfLifeCalculator />;
            case 'quadratic': return <QuadraticFormulaCalculator />;
            case 'ratio': return <RatioCalculator />;
            case 'root': return <RootCalculator />;
            case 'lcm': return <LcmCalculator />;
            case 'gcf': return <GcfCalculator />;
            case 'factor': return <FactorCalculator />;
            case 'rounding': return <RoundingCalculator />;

            default: return <ComingSoon />;
        }
    };

    if (showSplash) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white animate-fadeIn">
                <CalculatorIcon className="w-24 h-24 text-indigo-400 mb-4" />
                <h1 className="text-4xl font-bold tracking-wider">SK All Calculator</h1>
                <p className="text-indigo-300 mt-2">Your everyday calculation partner</p>
            </div>
        );
    }

    return (
        <div className={`min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300 pb-14`}>
             <div className="overflow-x-hidden relative">
                <main key={pageKey} className={currentPage === 'home' ? 'animate-fadeIn' : 'animate-slideInRight'}>
                    {currentPage === 'home' ? (
                        <>
                            <header className="bg-gradient-to-r from-sky-500 to-indigo-600 p-6 shadow-lg">
                                <h1 className="text-3xl font-bold text-white text-center">SK All Calculator</h1>
                            </header>
                            <div className="p-4 md:p-6">
                                {CALCULATOR_CATEGORIES.map(category => (
                                    <div key={category.id} className="mb-8">
                                        <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-300 border-l-4 border-indigo-500 pl-3">{category.name}</h2>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                            {category.calculators.map(calc => (
                                                <Card key={calc.id} onClick={() => handleNavigate(calc.id)}>
                                                    <div className="text-indigo-500 dark:text-indigo-400 mb-2">{calc.icon}</div>
                                                    <h3 className="font-semibold text-center text-sm sm:text-base">{calc.name}</h3>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        currentCalculator && (
                            <CalculatorPage title={currentCalculator.name} onBack={handleBack}>
                                {renderCalculatorPage()}
                            </CalculatorPage>
                        )
                    )}
                </main>
            </div>
            
            <AdBanner />
            {showInterstitial && (
                <AdOverlay 
                    title="Interstitial Test Ad" 
                    adId="ca-app-pub-3940256099942544/1033173712"
                    onClose={closeInterstitial}
                />
            )}
            {showRewarded && (
                 <AdOverlay 
                    title="Rewarded Test Ad" 
                    adId="ca-app-pub-3940256099942544/5224354917"
                    onClose={closeRewarded}
                />
            )}
        </div>
    );
};

export default App;