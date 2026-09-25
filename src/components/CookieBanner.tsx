import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user already accepted cookies
    const consent = localStorage.getItem('kopru_cookie_consent');
    if (!consent) {
      // Trigger slide-in after a short delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kopru_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kopru_cookie_consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md bg-white text-slate-700 p-5 rounded-2xl shadow-2xl border border-slate-200/80 z-50 text-xs"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            
            <div className="space-y-2.5">
              <p className="text-slate-600 leading-relaxed font-medium">
                Sitemizden en verimli şekilde faydalanabilmeniz için çerezler (cookies) kullanılmaktadır. Ayrıntılı bilgi için <a className="text-brand-blue font-bold underline hover:text-brand-blue-hover" href="#cerez">Çerez Politikamızı</a> inceleyebilirsiniz.
              </p>
              
              <div className="flex items-center space-x-2 pt-0.5">
                <button 
                  onClick={handleAccept}
                  className="px-4 py-1.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold rounded-lg transition-colors cursor-pointer"
                  type="button"
                >
                  Kabul Et
                </button>
                <button 
                  onClick={handleDecline}
                  className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors cursor-pointer"
                  type="button"
                >
                  Reddet
                </button>
              </div>
            </div>

            <button 
              onClick={() => setVisible(false)}
              className="text-slate-400 hover:text-slate-600 ml-auto p-0.5 bg-slate-50 rounded-lg"
              aria-label="Kapat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
