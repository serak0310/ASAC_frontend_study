import { render, screen } from '@testing-library/react';
import Amount, { calculateAmount } from './Amount';

test('3000을 더한 금액이 잘 나오는지 확인', () => {
  render(<Amount amount={20000}/>);
  const amountText = screen.getByText(/23000/i);
  expect(amountText).toBeInTheDocument();
});

test('원을 포함한 금액이 잘 나오는지 확인', () => {
  render(<Amount amount={20000}/>);
  const amountText = screen.getByText(/20000원/i);
  expect(amountText).toBeInTheDocument();
});

test("계산함수가 잘 작동하는지 확인", ()=>{
  expect(calculateAmount(100)).toBe(10000)
})
