export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Return & Exchange Policy</h1>

        {/* Countries */}
        <section>
          <h2 className="font-semibold text-lg">Countries</h2>
          <p className="text-gray-700">
            This return policy applies to orders shipped within <b>India</b>.
          </p>
        </section>

        {/* Returns */}
        <section>
          <h2 className="font-semibold text-lg">Returns</h2>
          <p className="text-gray-700">
            We accept returns for both <b>defective</b> and <b>non-defective</b>
            products.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Return window: within <b>7 days</b> of delivery</li>
            <li>Items must be unused and in original packaging</li>
            <li>Proof of purchase is required</li>
          </ul>
        </section>

        {/* Exchanges */}
        <section>
          <h2 className="font-semibold text-lg">Exchanges</h2>
          <p className="text-gray-700">
            We accept exchanges for eligible products.
          </p>
        </section>

        {/* Method */}
        <section>
          <h2 className="font-semibold text-lg">Return Method</h2>
          <p className="text-gray-700">
            To initiate a return or exchange, please contact us with your order
            details. Return instructions will be shared after verification.
          </p>
        </section>

        {/* Fees */}
        <section>
          <h2 className="font-semibold text-lg">Fees</h2>
          <p className="text-gray-700">
            Return shipping fees may apply unless the product is defective or
            incorrect.
          </p>
        </section>

        {/* Refunds */}
        <section>
          <h2 className="font-semibold text-lg">Refunds</h2>
          <p className="text-gray-700">
            Once the returned item is received and inspected, refunds will be
            processed to the original payment method within 5–7 business days.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-semibold text-lg">Contact</h2>
          <p className="text-gray-700">
            For return or exchange requests, contact us at:
            <br />
            <b>Email:</b> support@example.com
          </p>
        </section>
      </div>
    </div>
  );
}