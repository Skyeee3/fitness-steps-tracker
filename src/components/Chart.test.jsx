import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Chart from './Chart';

// Mock recharts
vi.mock('recharts', () => ({
  LineChart: ({ children }) => <div data-testid="line-chart">{children}</div>,
  Line: () => <div data-testid="line" />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  CartesianGrid: () => <div data-testid="grid" />,
  Tooltip: () => <div data-testid="tooltip" />,
  Legend: () => <div data-testid="legend" />,
  ResponsiveContainer: ({ children }) => <div data-testid="container">{children}</div>,
  Label: () => <div data-testid="label" />,
}));

// Mock data
vi.mock('../data/exerciseData.json', () => ({
  default: [
    { date: '2024-01-01', calories: 250, durationMinutes: 30 }
  ]
}));

describe('Chart Component', () => {
  test('renders chart title', () => {
    render(<Chart />);
    expect(screen.getByText('Calories & Steps Trend')).toBeInTheDocument();
  });

  test('renders chart components', () => {
    render(<Chart />);
    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    expect(screen.getByTestId('grid')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    expect(screen.getByTestId('legend')).toBeInTheDocument();
  });

  test('renders steps calculation note', () => {
    render(<Chart />);
    expect(screen.getByText('Steps = durationMinutes × 100')).toBeInTheDocument();
  });
});