"use client";
import { useEffect, useState } from 'react';
import { FaUniversalAccess } from 'react-icons/fa';

const STORAGE_KEY = 'dyslexia-mode';

export function AccessibilityToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) === 'true';
    if (stored) {
      setEnabled(true);
      document.documentElement.classList.add('dyslexia-mode');
    }
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    document.documentElement.classList.toggle('dyslexia-mode', next);
    localStorage.setItem(STORAGE_KEY, String(next));
  };

  return (
    <li
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Désactiver la police adaptée à la dyslexie" : "Activer la police adaptée à la dyslexie"}
      title="Police adaptée à la dyslexie"
      className={`flex items-center justify-center cursor-pointer transition hover:text-white/50 ${enabled ? 'text-primary' : ''}`}
    >
      <FaUniversalAccess className="w-6 h-6 sm:w-7 sm:h-7" />
    </li>
  );
}
