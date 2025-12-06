
import type React from 'react';

export interface Calculator {
    id: string;
    name: string;
    icon: React.ReactNode;
}

export interface CalculatorCategory {
    id: string;
    name: string;
    calculators: Calculator[];
}
