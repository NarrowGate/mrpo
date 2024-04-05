import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import View from '../View';

test('Waiting response -- loading', async () => {
  render(<View draws={null} status="network-error" />);

  const loadingElement = screen.getByText(/network error/i);
  expect(loadingElement).toBeTruthy();
});

test('Waiting response -- network error', async () => {
  render(<View draws={null} status="loading" />);

  const loadingElement = screen.getByText(/loading.../i);
  expect(loadingElement).toBeTruthy();
});

test('Response recieved', () => {
  render(
    <View
      draws={{
        Draws: [
          {
            ProductId: 'TattsLotto',
            DrawNumber: 4445,
            DrawDisplayName: 'TattsLotto $5,000,000',
            DrawDate: '2024-02-24T00:00:00',
            DrawLogoUrl:
              'http://media.tatts.com/TattsServices/Lotto/Products/TattsLotto_v1.png',
            DrawType: 'BaseWeek',
            Div1Amount: 5000000.0,
            IsDiv1Estimated: false,
            IsDiv1Unknown: false,
            DrawCloseDateTimeUTC: '2024-02-24T09:35:00',
            DrawEndSellDateTimeUTC: '2024-02-24T09:30:00',
            DrawCountDownTimerSeconds: 540.0,
            DaysOfWeek: 'Saturday',
            PrizeBoostPercent: 0.0,
            PrizeBoost: 0.0,
          },
        ],
        ErrorInfo: null,
        Success: true,
      }}
      status=""
    />
  );
});
