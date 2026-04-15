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
          <div className={styles.heroBadge}>Trusted Senior Care · Kerala</div>
          <h1 className={styles.heroTitle}>A Garden of <em>Love &amp; Grace</em><br />for Your Loved Ones</h1>
          <p className={styles.heroDesc}>Offering comprehensive residential care with 24/7 medical support in our serene Wayanad facility, alongside personalized, professional nursing assistance delivered by certified caregivers in the comfort of your own home.</p>
          <div className={styles.heroCtas}>
            <a href="tel:+919100773861" className={styles.btnPrimary}>
              <Phone size={16} /> Call Now — Free Consultation
            </a>
            <button onClick={scrollToContact} className={styles.btnOutlineWhite}>
              <ClipboardList size={16} /> Get a Callback
            </button>
          </div>
          <div className={styles.heroTrust}>
            <div className={styles.trustItem}><div className={styles.trustDot}></div>Scenic Environment</div>
            <div className={styles.trustItem}><div className={styles.trustDot}></div>Homely Atmosphere</div>
            <div className={styles.trustItem}><div className={styles.trustDot}></div>Certified Staff</div>
            <div className={styles.trustItem}><div className={styles.trustDot}></div>24/7 Nursing</div>
          </div>
        </div>
      </section>

      <div className={styles.urgentStrip}>
        <Home size={16} /> <strong>Only 3 rooms available this month.</strong> Secure your spot — <a onClick={scrollToContact}>book a free tour</a> or call <a href="tel:+919100773861">+91 91007-73861</a>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statsInner}>

          <div><span className={styles.statNum}>24/7</span><span className={styles.statLabel}>Nursing Support</span></div>
          <div><span className={styles.statNum}>5★</span><span className={styles.statLabel}>Google Rating</span></div>
          <div><span className={styles.statNum}>₹0</span><span className={styles.statLabel}>Consultation Fee</span></div>
        </div>
      </div>

      <section className={styles.section} style={{ paddingBottom: '12px' }}>
        <div className={styles.divider}></div>
        <h2 className={styles.sectionTitle}>Life at Grace Garden</h2>
        <p className={styles.sectionSub}>A peaceful, lush environment where seniors thrive surrounded by nature and warmth.</p>
        <div className={styles.galleryRow}>
          <div className={`${styles.galleryCell} ${styles.galleryMain}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/Exterior-View.jpg" alt="Grace Garden main facility" style={{ height: '416px' }} />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/Emergency-Room.jpg" alt="Medical care" />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/residents-1.jpeg" alt="Yoga activity" />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/residents-3.jpeg" alt="Resident" />
          </div>
          <div className={styles.galleryCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.galleryImg} src="/images/facility-1.jpg" alt="Dining" />
          </div>
        </div>
      </section>

      <div className={styles.aboutSplit}>
        <div className={styles.aboutImgWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.aboutImg} src="/images/residents-2.jpeg" alt="Caregiver with senior" />
          <div className={styles.aboutImgBadge}><Leaf size={14} /> Est. 2010 · Ernakulam, Kerala</div>
        </div>
        <div className={styles.aboutText}>
          <div className={styles.divider}></div>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '18px' }}>
            Grace Garden was founded on one simple belief — every senior deserves to live with dignity, love, and joy. Nestled in serene surroundings in Kerala, weve been a trusted home for hundreds of seniors since 2010.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
            Our team of certified nurses, caregivers, and doctors work together to deliver personalised care — treating every resident like family. We are especially trusted by NRI families who want the best care for their parents back in Kerala.
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
            <span className={styles.ctaCardIcon}><MessageCircle size={26} /></span>
            <span className={styles.ctaCardTitle}>WhatsApp Us</span>
            <span className={styles.ctaCardSub}>Quick response in Malayalam or English.</span>
          </button>
          <button className={`${styles.ctaCard} ${styles.ctaVisit}`} onClick={scrollToContact}>
            <span className={styles.ctaCardIcon}><Home size={26} /></span>
            <span className={styles.ctaCardTitle}>Book a Free Tour</span>
            <span className={styles.ctaCardSub}>Visit and see the facilities in person.</span>
          </button>
          <button className={`${styles.ctaCard} ${styles.ctaBrochure}`} onClick={scrollToContact}>
            <span className={styles.ctaCardIcon}><FileText size={26} /></span>
            <span className={styles.ctaCardTitle}>Download Brochure</span>
            <span className={styles.ctaCardSub}>Full details on services and pricing in PDF.</span>
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
              <img className={styles.roomImg} src="/images/elegantroom.JPG" alt="Shared room" />
              <div className={styles.roomInfo}><h3>Shared Room</h3><p>Comfortable shared accommodation with 24/7 nursing care, TV, and daily housekeeping.</p><div className={styles.roomPrice}>From ₹18,000/month</div></div>
            </div>
            <div className={styles.roomCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.roomImg} src="/images/eliteroom.jpeg" alt="Semi-private room" />
              <div className={styles.roomInfo}><h3>Semi-Private Room</h3><p>More privacy, attached bathroom, personalised caregiver, and family-oriented amenities.</p><div className={styles.roomPrice}>From ₹28,000/month</div></div>
            </div>
            <div className={styles.roomCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.roomImg} src="/images/luxuryroom.JPG" alt="Private AC room" />
              <div className={styles.roomInfo}><h3>Private AC Room</h3><p>Fully air-conditioned private room with dedicated caregiver, premium meals, and daily doctor visits.</p><div className={styles.roomPrice}>From ₹45,000/month</div></div>
            </div>
            <div className={styles.roomCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.roomImg} src="/images/entertainmenthall (2).JPG" alt="Garden area" />
              <div className={styles.roomInfo}><h3>Garden &amp; Common Areas</h3><p>Lush tropical gardens, prayer hall, dining hall, and recreation rooms for daily enjoyment.</p><div className={styles.roomPrice}>Included in all plans</div></div>
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
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>Malayalam-Speaking Caregivers</h4><p>Familiar language reduces stress and makes seniors feel at home.</p></div></div>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>Dementia &amp; Special Needs Care</h4><p>Specialised memory care units with dementia-trained staff.</p></div></div>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>Transparent Billing</h4><p>No hidden fees. Itemised monthly bills. All-inclusive packages available.</p></div></div>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>Religious &amp; Cultural Programs</h4><p>Daily prayers, festival celebrations, and temple visits as per each residents faith.</p></div></div>
          <div className={styles.featureItem}><div className={styles.featureCheck}><Check size={14} /></div><div className={styles.featureText}><h4>NRI-Friendly Coordination</h4><p>WhatsApp updates, video calls, and detailed care reports for families overseas.</p></div></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="tel:+919100773861" className={styles.btnPrimary}><Phone size={16} /> Talk to a Care Advisor — Free</a>
        </div>
      </section>

      <div className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.divider}></div>
          <h2 className={styles.sectionTitle}>What Families Say About Us</h2>
          <p className={styles.sectionSub}>Real stories from Kerala families who trusted us with their most precious loved ones.</p>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testiHeader}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.testiAvatar} src="https://i.pravatar.cc/80?img=47" alt="Priya Nair" />
                <div><div className={styles.testiName}>Priya Nair</div><div className={styles.testiLoc}>Daughter, based in Dubai</div></div>
              </div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialText}>"My mother had been lonely after my father passed. Since she joined Grace Garden, she has found friends, purpose, and joy. The staff treats her like their own family."</p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testiHeader}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.testiAvatar} src="https://i.pravatar.cc/80?img=52" alt="Suresh Menon" />
                <div><div className={styles.testiName}>Suresh Menon</div><div className={styles.testiLoc}>Son, based in UK</div></div>
              </div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialText}>"As an NRI, I was worried leaving my father alone in Kerala. Grace Garden gives me daily WhatsApp updates. My father is healthier and happier than ever. Truly a blessing."</p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testiHeader}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.testiAvatar} src="https://i.pravatar.cc/80?img=44" alt="Dr Anitha" />
                <div><div className={styles.testiName}>Dr. Anitha Krishnan</div><div className={styles.testiLoc}>Daughter, Kochi</div></div>
              </div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialText}>"The food, the care, the medical support — everything is excellent. My mother's blood sugar improved significantly with the special diet prepared for her. Highly recommended."</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSection} id="contact-form">
        <div className={styles.formInner}>
          <h2 className={styles.formTitle}>Get a Free Consultation Today</h2>
          <p className={styles.formSub}>Our senior care advisor will call you back within 30 minutes.</p>
          <div className={styles.formGrid}>
            <div className={styles.formField}><label>Your Name *</label><input type="text" placeholder="Your full name" /></div>
            <div className={styles.formField}><label>Mobile Number *</label><input type="tel" placeholder="+91 XXXXX XXXXX" /></div>
            <div className={styles.formField}><label>Your Location</label><input type="text" placeholder="City / District" /></div>
            <div className={styles.formField}><label>Care Needed For</label>
              <select><option>Mother / Father</option><option>Grandparent</option><option>Spouse</option><option>Other relative</option></select>
            </div>
            <div className={styles.formField}><label>Type of Care Required</label>
              <select><option>General senior care</option><option>Dementia / Memory care</option><option>Post-surgery recovery</option><option>Bedridden care</option><option>Temporary / respite care</option></select>
            </div>
            <div className={styles.formField}><label>Best Time to Call</label>
              <select><option>Anytime</option><option>Morning (8am–12pm)</option><option>Afternoon (12pm–5pm)</option><option>Evening (5pm–9pm)</option></select>
            </div>
            <div className={`${styles.formField} ${styles.formFieldFull}`}><label>Any specific requirements?</label>
              <textarea placeholder="E.g. diabetic diet, Malayalam speaking caregiver, near Thrissur..."></textarea>
            </div>
          </div>
          <button className={styles.formSubmit}><Check size={16} /> Request Free Callback Now</button>
          <p className={styles.formPrivacy}><Lock size={12} /> Your information is private and never shared. We'll call you within 30 minutes.</p>
        </div>
      </div>

      <div className={styles.addressBar}>
        <div className={styles.addressInner}>
          <div className={styles.addressItem}><span className={styles.addressIcon}><MapPin size={16} /></span><div><h4>Address</h4><p>Grace Garden Senior Care<br />Vyttila, Ernakulam, Kerala – 682019</p></div></div>
          <div className={styles.addressItem}><span className={styles.addressIcon}><Phone size={16} /></span><div><h4>Phone</h4><p><a href="tel:+919100773861">+91 91007-73861</a></p></div></div>
          <div className={styles.addressItem}><span className={styles.addressIcon}><Mail size={16} /></span><div><h4>Email</h4><p><a href="mailto:care@gracegarden.in">care@gracegarden.in</a></p></div></div>
          <div className={styles.addressItem}><span className={styles.addressIcon}><Clock size={16} /></span><div><h4>Visiting Hours</h4><p>Daily: 9am – 7pm<br />Admissions: 24/7</p></div></div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}><Leaf size={20} /> Grace Garden</div>
        <p>Compassionate Senior Care in Kerala since 2010</p>
        <p style={{ marginTop: '6px' }}>Registered under Kerala Social Welfare Department · Trained Staff</p>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
          <a onClick={scrollToContact} style={{ cursor: 'pointer' }}>Contact Us</a>
          <a href="#">Careers</a>
        </div>
      </footer>

      <a href="tel:+919100773861" className={styles.floatCall} title="Call Now"><Phone size={22} /></a>
      <a href="https://wa.me/919100773861?text=Hi, I want to enquire about Grace Garden senior care" className={styles.floatWa} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>

    </div>
  );
}
