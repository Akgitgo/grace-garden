import Link from 'next/link';
import { CheckCircle, Home } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-[80vh] bg-slate-50 flex flex-col items-center justify-center p-4 py-20">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-600 w-12 h-12" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
          Thank You!
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Your message has been successfully sent. Our team at Grace Garden will contact you shortly to assist with your enquiry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
