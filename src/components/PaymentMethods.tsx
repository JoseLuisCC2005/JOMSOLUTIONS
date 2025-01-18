import { FaCreditCard, FaPaypal, FaApplePay } from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <section
      id="payment-methods"
      className="py-20"
      style={{ backgroundColor: "#01030e" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Métodos de Pago
        </h2>
        <div className="border-b-4 border-gradient-to-r from-blue-400 to-purple-400 mb-12"></div>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <PaymentMethod icon={<FaCreditCard />} name="Tarjeta Débito" />
          <PaymentMethod icon={<FaPaypal />} name="PayPal" />
          <PaymentMethod icon={<FaApplePay />} name="Apple Pay" />
        </div>
      </div>
    </section>
  );
};

const PaymentMethod = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => (
  <div className="flex flex-col items-center">
    <div
      className="flex items-center justify-center w-28 h-28 rounded-full mb-4 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
      style={{
        backgroundColor: "#34495e",
        background: "linear-gradient(to right, #3498db, #8e44ad)", // Degradado azul a morado
      }}
    >
      <div className="text-6xl text-white">
        {icon}
      </div>
    </div>
    <p className="text-lg font-semibold text-white">{name}</p>
  </div>
);

export default PaymentMethods;
