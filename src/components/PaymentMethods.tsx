import { FaCreditCard, FaPaypal, FaApplePay } from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <section
      id="payment-methods"
      className="py-20"
      style={{ backgroundColor: "#01030e" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
          Payment Methods
        </h2>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <PaymentMethod icon={<FaCreditCard />} name="Debit Card" />
          <PaymentMethod icon={<FaPaypal />} name="PayPal" />
          <PaymentMethod icon={<FaApplePay />} name="ApplePay" />
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
      className="flex items-center justify-center w-20 h-20 rounded-full mb-2"
      style={{ backgroundColor: "#34495e" }}
    >
      <div className="text-5xl text-primary-light dark:text-primary-dark">
        {icon}
      </div>
    </div>
    <p className="text-lg font-semibold text-primary-light dark:text-primary-dark">
      {name}
    </p>
  </div>
);

export default PaymentMethods;
