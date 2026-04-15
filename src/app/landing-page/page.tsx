"use client";

import React from 'react';
import {
  Phone,
  MessageCircle,
  Clock,
  Leaf,
  Globe,
  ClipboardList,
  Home,
  Stethoscope,
  Utensils,
  Activity,
  Palette,
  Bath,
  Smartphone,
  Check,
  FileText,
  Lock,
  MapPin,
  Mail,
  CalendarCheck,
  ArrowUpRight,
} from 'lucide-react';
import styles from './landing.module.css';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topbar}>
        <span><Phone size={14} /> Call us anytime:</span>
        <a href="tel:+919100773861">+91 91007-73861</a>
        <span>|</span>
        <span><Clock size={14} /> Open 24/7 · Admissions Available</span>
      </div>

      <div className={styles.navLogoBar}>
        <div className={styles.logoMark}>
          <div className={styles.logoIcon}>
            <Leaf size={24} />
          </div>
          <div>
            <div className={styles.logoTextMain}>Grace Garden</div>
            <div className={styles.logoTextSub}>Senior Care · Kerala</div>
          </div>
        </div>
        <div className={styles.navCtas}>
          <a href="/" className={styles.navBtnOutline}>
            <Globe size={14} /> Visit Website
          </a>
          <a href="tel:+919100773861" className={styles.navBtnCall}>
            <Phone size={14} /> Call Us
          </a>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: "url('/images/Exterior-View.jpg')" }}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.heroBadge}
          >
            Trusted Senior Care · Kerala
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.heroTitle}
          >
            A Garden of <em>Love &amp; Grace</em><br />for Your Loved Ones
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.heroDesc}
          >
            Offering comprehensive residential care with 24/7 medical support in our serene Wayanad facility, alongside personalized, professional nursing assistance delivered by certified caregivers in the comfort of your own home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className={styles.heroCtas}
          >
            <a href="tel:+919100773861" className={styles.btnPrimary}>
              <Phone size={16} /> Call Now — Free Consultation
            </a>
            <button onClick={scrollToContact} className={styles.btnOutlineWhite}>
              <ClipboardList size={16} /> Get a Callback
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className={styles.heroTrust}
          >
            <div className={styles.trustItem}><div className={styles.trustDot}></div>Scenic Environment</div>
            <div className={styles.trustItem}><div className={styles.trustDot}></div>Homely Atmosphere</div>
            <div className={styles.trustItem}><div className={styles.trustDot}></div>Certified Staff</div>
            <div className={styles.trustItem}><div className={styles.trustDot}></div>24/7 Nursing</div>
          </motion.div>
        </div>
      </section>

      <div className={styles.urgentStrip}>
        <div className={styles.marqueeInner}>
          <div className={styles.marqueeText}>
            <Home size={16} /> <strong>Only 3 rooms available this month.</strong> Secure your spot — <a onClick={scrollToContact}>book a free tour</a> or call <a href="tel:+919100773861">+91 91007-73861</a>
          </div>
          <div className={styles.marqueeText} aria-hidden="true">
            <Home size={16} /> <strong>Only 3 rooms available this month.</strong> Secure your spot — <a onClick={scrollToContact}>book a free tour</a> or call <a href="tel:+919100773861">+91 91007-73861</a>
          </div>
          <div className={styles.marqueeText} aria-hidden="true">
            <Home size={16} /> <strong>Only 3 rooms available this month.</strong> Secure your spot — <a onClick={scrollToContact}>book a free tour</a> or call <a href="tel:+919100773861">+91 91007-73861</a>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statsInner}>

          <div><span className={styles.statNum}>24/7</span><span className={styles.statLabel}>Nursing Support</span></div>
          <div><span className={styles.statNum}>5★</span><span className={styles.statLabel}>Google Rating</span></div>
          <div><span className={styles.statNum}>₹0</span><span className={styles.statLabel}>Consultation Fee</span></div>
          <div><span className={styles.statNum}>Zero</span><span className={styles.statLabel}>Hidden Charges</span></div>
        </div>
      </div>

      <section className={styles.section} style={{ paddingBottom: '12px' }}>
        <div className={styles.divider}></div>
        <h2 className={styles.sectionTitle}>Life at Grace Garden</h2>
        <p className={styles.sectionSub}>A peaceful, lush environment where seniors thrive surrounded by nature and warmth.</p>
        <div className={styles.galleryRow}>
          <div className={`${styles.galleryCell} ${styles.galleryMain}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/Exterior-View.jpg" alt="Grace Garden building exterior" />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/residents-1.jpeg" alt="Opening ceremony celebration" />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/birthday1.jpeg" alt="Birthday celebration" />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/facility-1.jpg" alt="Private dining hall" />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/entertainmenthall (2).JPG" alt="Entertainment hall" />
          </div>
        </div>
      </section>

      <div className={styles.aboutSplit}>
        <div className={styles.aboutImgWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.aboutImg} src="/images/residents-2.jpeg" alt="Caregiver with senior" />
          <div className={styles.aboutImgBadge}><Leaf size={14} /> Wayanad, Kerala</div>
        </div>
        <div className={styles.aboutText}>
          <div className={styles.divider}></div>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <p style={{ fontSize: '16px', color: 'var(--green)', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '18px', fontWeight: '500' }}>
            "Our mission is to provide dignity, comfort, and compassionate care to elders in a home-like environment."
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
            Grace Garden is a haven where professional caregivers dedicate themselves to elderly support of the highest quality. Our top priority is bringing joy, peace, and genuine warmth to the lives of our residents and their families.
          </p>
          <a href="tel:+919100773861" className={styles.btnPrimary}><Phone size={16} /> Talk to a Care Advisor</a>
        </div>
      </div>

      <section className={styles.section} style={{ paddingTop: '16px' }}>
        <div className={styles.divider}></div>
        <h2 className={styles.sectionTitle}>Everything Your Loved One Needs</h2>
        <p className={styles.sectionSub}>Comprehensive care under one roof — medical, emotional, social, and spiritual.</p>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}><div className={styles.serviceIcon}><Stethoscope size={24} /></div><h3>24/7 Medical Care</h3><p>Registered nurses on duty round the clock. Daily doctor visits. Emergency response within minutes.</p></div>
          <div className={styles.serviceCard}><div className={styles.serviceIcon}><Utensils size={24} /></div><h3>Kerala Home Cooking</h3><p>Freshly prepared traditional meals. Diabetic, cardiac, and customised menus available.</p></div>
          <div className={styles.serviceCard}><div className={styles.serviceIcon}><Activity size={24} /></div><h3>Yoga &amp; Physiotherapy</h3><p>Daily yoga and gentle physiotherapy to keep residents active and mobile.</p></div>
          <div className={styles.serviceCard}><div className={styles.serviceIcon}><Palette size={24} /></div><h3>Activities &amp; Recreation</h3><p>Music, arts, cultural programs, and religious observances for holistic wellbeing.</p></div>
          <div className={styles.serviceCard}><div className={styles.serviceIcon}><Bath size={24} /></div><h3>Personal Hygiene Care</h3><p>Trained caregivers assist with bathing, grooming, and mobility with dignity.</p></div>
          <div className={styles.serviceCard}><div className={styles.serviceIcon}><Smartphone size={24} /></div><h3>NRI Family Support</h3><p>Regular WhatsApp updates, video calls, and monthly care reports for families abroad.</p></div>
        </div>

        <div className={styles.ctaCards}>
          <button className={`${styles.ctaCard} ${styles.ctaCall}`} onClick={() => window.location.href = 'tel:+919100773861'}>
            <span className={styles.ctaCardIcon}><Phone size={26} /></span>
            <span className={styles.ctaCardTitle}>Call Us Now</span>
            <span className={styles.ctaCardSub}>Speak to our care team. Free consultation.</span>
          </button>
          <button className={`${styles.ctaCard} ${styles.ctaWhatsapp}`} onClick={() => window.open('https://wa.me/919100773861?text=Hi, I want to enquire about Grace Garden senior care')}>
            <span className={styles.ctaCardIcon}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </span>
            <span className={styles.ctaCardTitle}>WhatsApp Us</span>
            <span className={styles.ctaCardSub}>Quick response in Malayalam or English.</span>
          </button>
          <button className={`${styles.ctaCard} ${styles.ctaVisit}`} onClick={scrollToContact}>
            <span className={styles.ctaCardIcon}><Home size={26} /></span>
            <span className={styles.ctaCardTitle}>Book a Free Tour</span>
            <span className={styles.ctaCardSub}>Visit and see the facilities in person.</span>
          </button>
        </div>
      </section>

      <div className={styles.greenSection}>
        <div className={styles.greenSectionInner}>
          <div className={styles.divider}></div>
          <h2 className={styles.sectionTitle}>Our Rooms &amp; Facilities</h2>
          <p className={styles.sectionSub}>Clean, comfortable, and thoughtfully designed spaces that feel like home.</p>
          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.roomImg} src="/images/eliteroom.jpeg" alt="Shared room" />
              <div className={styles.roomInfo}><h3>Shared Room</h3><p>Comfortable shared accommodation with 24/7 nursing care, TV, and daily housekeeping.</p></div>
            </div>
            <div className={styles.roomCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.roomImg} src="/images/elegantroom.JPG" alt="Semi-private room" />
              <div className={styles.roomInfo}><h3>Semi-Private Room</h3><p>More privacy, attached bathroom, personalised caregiver, and family-oriented amenities.</p></div>
            </div>
            <div className={styles.roomCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.roomImg} src="/images/luxuryroom.JPG" alt="Private AC room" />
              <div className={styles.roomInfo}><h3>Private AC Room</h3><p>Fully air-conditioned private room with dedicated caregiver, premium meals, and daily doctor visits.</p></div>
            </div>
            <div className={styles.roomCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.roomImg} src="/images/entertainmenthall (2).JPG" alt="Garden area" />
              <div className={styles.roomInfo}><h3>Garden &amp; Common Areas</h3><p>Lush tropical gardens, prayer hall, dining hall, and recreation rooms for daily enjoyment.</p></div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={scrollToContact} className={styles.btnPrimary}>
              <CalendarCheck size={16} /> Book a Free Tour of Our Facility
            </button>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <h2 className={styles.sectionTitle}>Why Families Choose Grace Garden</h2>
        <p className={styles.sectionSub}>Our care is rooted in Kerala values — love, respect, and family.</p>
        <div className={styles.featuresList}>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>Certified Nursing Staff</h4><p>All staff fully trained, background-verified, and experienced in elderly care.</p></div></div>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>Transparent Billing</h4><p>No hidden fees. Itemised monthly bills. All-inclusive packages available.</p></div></div>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>Religious &amp; Cultural Programs</h4><p>Daily prayers, festival celebrations, and temple visits as per each residents faith.</p></div></div>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>NRI-Friendly Coordination</h4><p>WhatsApp updates, video calls, and detailed care reports for families overseas.</p></div></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="tel:+919100773861" className={styles.btnPrimary}><Phone size={16} /> Talk to a Care Advisor — Free</a>
        </div>
      </section>

      <Testimonials />

      <div id="contact-form">
        <ContactForm />
      </div>



      <a href="tel:+919100773861" className={styles.floatCall} title="Call Now"><Phone size={22} /></a>

    </div>
  );
}
