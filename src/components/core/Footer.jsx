import { ExternalLink, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'Sobre Merahki', href: 'https://merahki.ai/#sobre-nosotros', external: true },
      { label: 'Blog', href: 'https://merahki.ai/blog', external: true },
      { label: 'Casos de Éxito', href: 'https://merahki.ai/casos-de-exito', external: true },
      { label: 'Contacto', href: 'https://merahki.ai/contacto', external: true },
    ],
    product: [
      { label: 'Plataforma', href: 'https://merahki.ai/plataforma', external: true },
      { label: 'Características', href: 'https://merahki.ai/caracteristicas', external: true },
      { label: 'Precios', href: 'https://merahki.ai/precios', external: true },
      { label: 'Documentación', href: 'https://docs.merahki.ai', external: true },
    ],
    resources: [
      { label: 'Centro de Ayuda', href: 'https://help.merahki.ai', external: true },
      { label: 'Webinars', href: 'https://merahki.ai/webinars', external: true },
      { label: 'Guías', href: 'https://merahki.ai/guias', external: true },
      { label: 'API', href: 'https://api.merahki.ai', external: true },
    ],
    legal: [
      { label: 'Términos de Servicio', href: 'https://merahki.ai/terminos', external: true },
      { label: 'Política de Privacidad', href: 'https://merahki.ai/privacidad', external: true },
      { label: 'Cookies', href: 'https://merahki.ai/cookies', external: true },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/merahki', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/merahki', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hola@merahki.ai', label: 'Email' },
  ];

  return (
    <footer className="relative z-20 bg-background/95 backdrop-blur-xl border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a 
              href="https://merahki.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mb-4 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-2xl font-heading font-bold text-gradient">
                Merahki.ai
              </h3>
            </a>
            <p className="text-sm text-foreground/60 mb-4">
              Education-Led Growth para empresas que quieren escalar con inteligencia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 rounded-lg transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-foreground/60 group-hover:text-primary-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-foreground/60 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-foreground/60 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-foreground/60 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-foreground/60 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-foreground/50">
              © {currentYear} Merahki.ai. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-foreground/50">
              <span>Hecho con ❤️ para transformar la educación empresarial</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
