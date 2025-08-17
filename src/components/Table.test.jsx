import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Table from './Table';

// Mock data
vi.mock('../data/exerciseData.json', () => ({
  default: [
    { date: '2024-01-01', calories: 250, durationMinutes: 30 },
    { date: '2024-01-02', calories: 180, durationMinutes: 20 }
  ]
}));

describe('Table Component', () => {
  test('renders table title', () => {
    render(<Table />);
    expect(screen.getByText('Exercise Records')).toBeInTheDocument();
  });

  test('renders table headers', () => {
    render(<Table />);
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Calories')).toBeInTheDocument();
    expect(screen.getByText('Duration (min)')).toBeInTheDocument();
    expect(screen.getByText('Steps')).toBeInTheDocument();
  });

  test('renders table data', () => {
    render(<Table />);
    // Check if data is rendered
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(screen.getByText('250')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('3,000')).toBeInTheDocument(); // 30 * 100
    
    expect(screen.getByText('2024-01-02')).toBeInTheDocument();
    expect(screen.getByText('180')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('2,000')).toBeInTheDocument(); // 20 * 100
  });
});