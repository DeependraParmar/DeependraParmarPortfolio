import React, { useEffect } from 'react'
import BackToTop from './BackToTop';

export default function Contact() {
  document.title = "Contact | Deependra Parmar";
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      

      <BackToTop />
    </div>
  )
}
