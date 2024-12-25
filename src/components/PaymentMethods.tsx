import Image from 'next/image'
import { FaCreditCard, FaPaypal, FaBitcoin } from 'react-icons/fa'

const PaymentMethods = () => {
  return (
    <section id="payment-methods" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Payment Methods</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <PaymentMethod icon={<FaCreditCard className="text-4xl" />} name="Credit Card" />
          <PaymentMethod icon={<FaPaypal className="text-4xl" />} name="PayPal" />
          <PaymentMethod
            icon={<Image src="/stripe-logo.png" alt="Stripe" width={64} height={64} />}
            name="Stripe"
          />

        </div>
      </div>
    </section>
  )
}

const PaymentMethod = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex flex-col items-center">
    <div className="mb-2">{icon}</div>
    <p className="text-lg font-semibold text-gray-800 dark:text-white">{name}</p>
  </div>
)

export default PaymentMethods

