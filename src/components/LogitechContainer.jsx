import { CartProvider, useCart } from "../context/CartContext"

export const LogitechContainer = () => {
  const { cart } = useCart();

  return (
    <div>
      <strong>jaja</strong>
        <CartProvider>
        </CartProvider>
    </div>
  );
};
export default LogitechContainer