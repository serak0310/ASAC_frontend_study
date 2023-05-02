export default function Amount({ amount }) {
    const totalAmount = Number(amount) + 3000;
  
    return (
      <>
        <div>{totalAmount}</div>
        <div>{amount + "원"}</div>
      </>
    );
  }
  
  export function calculateAmount(amount) {
    return amount * 100;
  }