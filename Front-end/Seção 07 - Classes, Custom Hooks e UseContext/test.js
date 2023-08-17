// import React from 'react';
// import { render, screen, waitFor } from "@testing-library/react";
// import FilterPlanetsName from "../components/filterPlanetsName";
// import mockFetch, { renderWithContext } from "./mocks/fetch";
// import { PlanetsContext } from "../context/planets";
// import userEvent from "@testing-library/user-event";
// import { vi } from "vitest";

//exemplos de mocks de hooks

test('verifica se setFilter é chamado corretamente quando o input muda', () => {
  const mockSetFilter = vi.fn();
  const mockContextValue = {
    setFilter: mockSetFilter,
    setPlanetsData: vi.fn(),
    planetsData: [],
    loading: false,
    error: '',
    setLoading: vi.fn(),
  };

  render(
    <PlanetsContext.Provider value={mockContextValue}>
      <FilterPlanetsName />
    </PlanetsContext.Provider>
  );

  const inputElement = screen.getByTestId('name-filter');
  waitFor(() => {
    userEvent.type(inputElement, 'TATOO');
    expect(mockSetFilter).toHaveBeenCalled();
  })
});
test('verifica se setFilter é chamado quando o input muda', async () => {
  const mockState = vi.fn();
  const mockSetState = vi.mock('react', async () => {
    return {
      ...React,
      useState: (initialState: any) => [initialState !== undefined ? initialState : mockState, mockSetState],
    };
  });
  renderWithContext(<FilterPlanetsName />);
  const inputElement = screen.getByTestId('name-filter');
  waitFor(() => {
    userEvent.type(inputElement, 'TATOO');
    expect(mockState).toHaveBeenCalled();
  })
})