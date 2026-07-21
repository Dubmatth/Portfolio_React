const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Matthieu Dubois. Built with ❤️, React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
