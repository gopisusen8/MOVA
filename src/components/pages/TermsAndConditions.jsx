import styles from './TermsAndConditions.module.css'

const TermsAndConditions = () => {
  return (
    <div className={styles.terms__container}>
      <h1>Terms & Conditions for Car Rentals (Self-Drive & Chauffeur-Driven) - Mova</h1>
      <p className={styles.updated}>Last Updated: [Date]</p>

      <section>
        <h2>1. Eligibility & Account Responsibility</h2>
        <ul>
          <li>Users must be at least 21 years old for self-drive rentals and meet the age criteria set by rental agencies. (Some agencies may allow 18+ users with special terms.)</li>
          <li>Users must provide accurate personal details (name, contact, ID proof) and update them when necessary.</li>
          <li>Mova reserves the right to verify documents and reject rentals if credentials are invalid.</li>
          <li>Users are responsible for securing their account credentials and transactions. Mova is not liable for unauthorized use of an account.</li>
          <li>The company reserves the right to verify and suspend accounts with inaccurate information.</li>
        </ul>
      </section>

      <section>
        <h2>2. Booking & Payment</h2>
        <ul>
          <li>All bookings must be made through the Mova platform (app or website). No direct transactions with agencies outside the platform are allowed.</li>
          <li>Users must complete payment before vehicle pickup, unless the agency permits payment on arrival.</li>
          <li>The security deposit (if applicable) will be blocked during the booking and refunded as per the agency's policy.</li>
          <li>Cancellation and refund policies vary by agency, and users must review them before booking. Late return charges apply if the vehicle is returned beyond the agreed time.</li>
        </ul>
      </section>

      <section>
        <h2>3. Vehicle Pickup, Return & Late Fees</h2>
        <ul>
          <li>Users must inspect the vehicle at pickup and report any existing damages to avoid liability.</li>
          <li>Vehicles must be returned on time to avoid late fees. Extensions are subject to availability and must be approved via the Mova platform.</li>
          <li>If a vehicle is returned late, the user may be charged:
            <ul>
              <li>Hourly delay fee (as per agency policy).</li>
              <li>Additional day charge if exceeded beyond the agreed time.</li>
            </ul>
          </li>
          <li>Users must return the vehicle with the same fuel level as at the time of pickup. If not, fuel charges will apply.</li>
        </ul>
      </section>

      <section>
        <h2>4. Vehicle Usage & Liability</h2>
        <ul>
          <li>Users must comply with all traffic laws, speed limits, and parking regulations. Any fines or penalties during the rental period are the user’s responsibility.</li>
          <li>The vehicle must be returned in the same condition as received, excluding normal wear and tear.</li>
          <li>Prohibited Uses:
            <ul>
              <li>Subleasing or allowing unauthorized persons to drive the vehicle.</li>
              <li>Using the vehicle for illegal activities, racing, off-roading (unless specified).</li>
              <li>Disabling GPS, modifying the vehicle, or tampering with safety systems will result in legal action and penalties.</li>
            </ul>
          </li>
          <li>Users are liable for any damages resulting from reckless driving, intoxication, unauthorized vehicle use, or non-compliance with traffic laws.</li>
          <li>In case of an accident, users must immediately inform the rental agency and local authorities if required.</li>
          <li>Insurance coverage applies as per agency terms, but the user is liable for deductibles or damages beyond insurance limits.</li>
        </ul>
      </section>

      <section>
        <h2>5. Insurance & Damage Policy</h2>
        <ul>
          <li>Basic insurance coverage is provided, but users must verify terms before booking.</li>
          <li>Users should inspect the vehicle before use and report any pre-existing damages to avoid liability.</li>
          <li>The user is responsible for any damage beyond normal wear and tear and must cover repair costs if not covered under insurance.</li>
          <li>If the car is stolen or involved in illegal activity, the user is fully liable and must cooperate with authorities.</li>
          <li>The rental agency reserves the right to withhold the security deposit or charge additional fees for damages.</li>
        </ul>
      </section>

      <section>
        <h2>6. Chauffeur-Driven Rentals</h2>
        <ul>
          <li>For chauffeur-driven services, the driver is responsible for vehicle handling. Users must treat drivers with respect.</li>
          <li>Users cannot force drivers to exceed speed limits, drive under unsafe conditions, or engage in illegal activities.</li>
          <li>If a user requests a change in the trip route, additional charges may apply as per agency policy.</li>
        </ul>
      </section>

      <section>
        <h2>7. Data Privacy & Security</h2>
        <ul>
          <li>User data is securely stored and will not be shared with third parties except for legal and operational purposes.</li>
          <li>GPS tracking may be enabled for security reasons, and users consent to its usage upon booking.</li>
          <li>Mova ensures that financial transactions are encrypted and secured.</li>
          <li>All transactions are encrypted, and financial data is not stored by Mova.</li>
          <li>User data is stored for operational and legal purposes only and will not be shared for marketing without consent.</li>
        </ul>
      </section>

      <section>
        <h2>8. Refund & Dispute Resolution</h2>
        <ul>
          <li>Refunds (if applicable) will be processed within 7-10 business days as per agency policies.</li>
          <li>Disputes related to damages, billing, or service quality will be handled by Mova’s internal resolution team before escalating to legal authorities.</li>
          <li>Mova reserves the right to mediate or escalate the issue as per applicable laws.</li>
          <li>Mova is a facilitator platform, and any disputes between the user and the agency must be settled per the agency’s policies.</li>
        </ul>
      </section>

      <section>
        <h2>9. Prohibited Activities & Penalties</h2>
        <ul>
          <li>Engaging in fraudulent bookings, payment fraud, or fake reviews will result in account suspension and legal action.</li>
          <li>Users found violating terms may be banned from using Mova’s services.</li>
        </ul>
      </section>

      <section>
        <h2>10. Terms Acceptance & Legal Jurisdiction</h2>
        <ul>
          <li>By using Mova’s rental services, users agree to these Terms & Conditions.</li>
          <li>Any legal matters will be governed by [Your Country/State] laws and resolved in the courts of [City Name].</li>
        </ul>
      </section>
    </div>
  )
}

export default TermsAndConditions
