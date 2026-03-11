const Footer = () => (
  <footer className="border-t border-border py-6 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Aliah Mae
      </p>
      <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        BSc (Hons) Creative Computing
      </p>
    </div>
  </footer>
);

export default Footer;
