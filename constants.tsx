import React from 'react';
import type { CalculatorCategory } from './types';
import { 
    HeartIcon, ScaleIcon, FireIcon, DumbbellIcon, PersonRunningIcon, ShieldCheckIcon,
    StethoscopeIcon, BabyIcon, CalendarIcon, TestTubeIcon,
    CalculatorIcon, PercentageIcon, BracketsIcon, SigmaIcon,
    TriangleIcon, CubeIcon, ShapeIcon,
    ClockIcon, TimeIcon,
    GasPumpIcon, CarIcon, SpeedometerIcon
} from './components/icons';

export const CALCULATOR_CATEGORIES: CalculatorCategory[] = [
    {
        id: 'fitness',
        name: 'Fitness Calculators',
        calculators: [
            { id: 'bmi', name: 'BMI Calculator', icon: <ScaleIcon /> },
            { id: 'calorie', name: 'Calorie Calculator', icon: <FireIcon /> },
            { id: 'bodyFat', name: 'Body Fat Calculator', icon: <PercentageIcon /> },
            { id: 'bmr', name: 'BMR Calculator', icon: <HeartIcon /> },
            { id: 'idealWeight', name: 'Ideal Weight', icon: <StethoscopeIcon /> },
            { id: 'pace', name: 'Pace Calculator', icon: <PersonRunningIcon /> },
            { id: 'armyBodyFat', name: 'Army Body Fat', icon: <ShieldCheckIcon /> },
            { id: 'leanBodyMass', name: 'Lean Body Mass', icon: <DumbbellIcon /> },
            { id: 'healthyWeight', name: 'Healthy Weight', icon: <ScaleIcon /> },
            { id: 'caloriesBurned', name: 'Calories Burned', icon: <FireIcon /> },
            { id: 'oneRepMax', name: 'One Rep Max', icon: <DumbbellIcon /> },
            { id: 'targetHeartRate', name: 'Target Heart Rate', icon: <HeartIcon /> },
        ],
    },
    {
        id: 'pregnancy',
        name: 'Pregnancy Calculators',
        calculators: [
            { id: 'pregnancy', name: 'Pregnancy Calculator', icon: <BabyIcon /> },
            { id: 'pregnancyWeightGain', name: 'Weight Gain', icon: <ScaleIcon /> },
            { id: 'pregnancyConception', name: 'Conception', icon: <TestTubeIcon /> },
            { id: 'dueDate', name: 'Due Date Calculator', icon: <CalendarIcon /> },
            { id: 'ovulation', name: 'Ovulation Calculator', icon: <CalendarIcon /> },
            { id: 'conception', name: 'Conception', icon: <TestTubeIcon /> },
            { id: 'period', name: 'Period Calculator', icon: <CalendarIcon /> },
        ],
    },
    {
        id: 'math',
        name: 'Math Calculators',
        calculators: [
            { id: 'scientific', name: 'Scientific', icon: <CalculatorIcon /> },
            { id: 'fraction', name: 'Fraction', icon: <BracketsIcon /> },
            { id: 'percentage', name: 'Percentage', icon: <PercentageIcon /> },
            { id: 'randomNumber', name: 'Random Number', icon: <SigmaIcon /> },
            { id: 'percentError', name: 'Percent Error', icon: <PercentageIcon /> },
            { id: 'exponent', name: 'Exponent', icon: <CalculatorIcon /> },
            { id: 'binary', name: 'Binary', icon: <BracketsIcon /> },
            { id: 'hex', name: 'Hex', icon: <BracketsIcon /> },
            { id: 'halfLife', name: 'Half-Life', icon: <TimeIcon /> },
            { id: 'quadratic', name: 'Quadratic Formula', icon: <SigmaIcon /> },
            { id: 'log', name: 'Log', icon: <SigmaIcon /> },
            { id: 'ratio', name: 'Ratio', icon: <PercentageIcon /> },
            { id: 'root', name: 'Root', icon: <SigmaIcon /> },
            { id: 'lcm', name: 'LCM', icon: <SigmaIcon /> },
            { id: 'gcf', name: 'GCF', icon: <SigmaIcon /> },
            { id: 'factor', name: 'Factor', icon: <SigmaIcon /> },
            { id: 'rounding', name: 'Rounding', icon: <CalculatorIcon /> },
            { id: 'matrix', name: 'Matrix', icon: <BracketsIcon /> },
            { id: 'scientificNotation', name: 'Scientific Notation', icon: <BracketsIcon /> },
            { id: 'bigNumber', name: 'Big Number', icon: <CalculatorIcon /> },
        ],
    },
    {
        id: 'geometry',
        name: 'Geometry Calculators',
        calculators: [
            { id: 'triangle', name: 'Triangle', icon: <TriangleIcon /> },
            { id: 'volume', name: 'Volume', icon: <CubeIcon /> },
            { id: 'slope', name: 'Slope', icon: <TriangleIcon /> },
            { id: 'area', name: 'Area', icon: <ShapeIcon /> },
            { id: 'distance', name: 'Distance', icon: <PersonRunningIcon /> },
            { id: 'circle', name: 'Circle', icon: <ShapeIcon /> },
        ],
    },
    {
        id: 'date-time',
        name: 'Date & Time Calculators',
        calculators: [
            { id: 'age', name: 'Age Calculator', icon: <CalendarIcon /> },
            { id: 'date', name: 'Date Calculator', icon: <CalendarIcon /> },
            { id: 'time', name: 'Time Calculator', icon: <ClockIcon /> },
            { id: 'hours', name: 'Hours Calculator', icon: <TimeIcon /> },
        ],
    },
    {
        id: 'transportation',
        name: 'Transportation Calculators',
        calculators: [
            { id: 'fuelCost', name: 'Fuel Cost', icon: <GasPumpIcon /> },
            { id: 'gasMileage', name: 'Gas Mileage', icon: <CarIcon /> },
            { id: 'horsepower', name: 'Horsepower', icon: <SpeedometerIcon /> },
        ],
    },
];
