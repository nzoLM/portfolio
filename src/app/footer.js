"use client";
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white p-5">
      <div className="self-center">
        <p className="text-sm text-center">Copyright &copy; {year} Enzo Le Moal. Tous droits réservés.</p>
      </div>
    </footer>
  );
}