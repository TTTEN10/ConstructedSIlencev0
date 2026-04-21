import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import FadeInView from '@/components/FadeInView';

export default function ReturnPolicy() {
  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-12">
        <FadeInView>
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Customer care
          </span>
        </FadeInView>
        <FadeInView delay={0.15}>
          <h1 className="font-playfair text-4xl md:text-6xl text-foreground mt-6 tracking-tight leading-none">
            Return policy
          </h1>
        </FadeInView>

        <div className="mt-12 max-w-3xl space-y-10">
          <FadeInView delay={0.25}>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              This Return Policy applies to purchases made on this site. By placing an order, you
              agree to the terms below.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                1) Return window
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                You may request a return within <span className="text-secondary-foreground">14 calendar days</span> of
                the delivery date. Requests submitted after 14 days are not accepted.
              </p>
            </section>
          </FadeInView>

          <FadeInView delay={0.35}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                2) Condition requirements
              </h2>
              <ul className="list-disc pl-5 space-y-2 font-inter text-sm text-muted-foreground leading-relaxed">
                <li>
                  Items must be <span className="text-secondary-foreground">unworn, unwashed, and unaltered</span>.
                </li>
                <li>
                  All original tags, seals, and protective elements must be intact and attached.
                </li>
                <li>
                  Items must be returned in their original packaging (including dust bags, boxes, and inserts
                  where applicable).
                </li>
                <li>
                  Returns showing odors, stains, makeup marks, pet hair, deodorant, damage, or signs of wear will be
                  refused and sent back.
                </li>
              </ul>
            </section>
          </FadeInView>

          <FadeInView delay={0.4}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                3) Non-returnable items
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                The following are <span className="text-secondary-foreground">final sale</span> and cannot be returned or exchanged:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-inter text-sm text-muted-foreground leading-relaxed">
                <li>Items marked “Final Sale” or discounted as part of an archive/sample sale.</li>
                <li>Gift cards.</li>
                <li>Accessories or items where hygiene seals have been removed (when applicable).</li>
                <li>Customized or made-to-order pieces.</li>
              </ul>
            </section>
          </FadeInView>

          <FadeInView delay={0.45}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                4) How to start a return
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                Request a return by contacting support with your order number and the item(s) you wish to return.
                If approved, you will receive return instructions. Unapproved returns may be rejected at delivery.
              </p>
            </section>
          </FadeInView>

          <FadeInView delay={0.5}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                5) Shipping, duties, and risk of loss
              </h2>
              <ul className="list-disc pl-5 space-y-2 font-inter text-sm text-muted-foreground leading-relaxed">
                <li>Return shipping fees are the customer’s responsibility unless the item is defective or incorrect.</li>
                <li>
                  Original shipping charges, duties, and taxes are non-refundable unless required by law.
                </li>
                <li>
                  You are responsible for the parcel until it is received and accepted by our returns team.
                  We strongly recommend tracked and insured shipping.
                </li>
              </ul>
            </section>
          </FadeInView>

          <FadeInView delay={0.55}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                6) Refunds
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                Once received, we inspect returns. If accepted, refunds are issued to the original payment method.
                Processing times vary by payment provider. We may deduct any loss in value resulting from handling
                beyond what is necessary to establish the item’s nature, characteristics, and functioning.
              </p>
            </section>
          </FadeInView>

          <FadeInView delay={0.6}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                7) Damaged, defective, or incorrect items
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                If your order arrives damaged, defective, or incorrect, contact support within <span className="text-secondary-foreground">48 hours</span> of delivery
                and include clear photos of the item and packaging. Claims submitted after 48 hours may be declined.
              </p>
            </section>
          </FadeInView>

          <FadeInView delay={0.65}>
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl text-foreground tracking-tight">
                8) Policy changes
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                We may update this policy at any time. The version in effect at the time of purchase will apply to
                that order.
              </p>
            </section>
          </FadeInView>
        </div>
      </main>
      <Footer />
    </div>
  );
}

