import { motion } from 'framer-motion';
import { Home, TrendingUp, Laptop } from 'lucide-react';
import { cn } from '@utils/cn';

const MainNav = ({ currentPage, onNavigate }) => {
  const pages = [
    { id: 'demo', label: 'Demo', icon: Home },
    { id: 'growth', label: 'Growth', icon: TrendingUp },
    { id: 'virtualization', label: 'Virtualización', icon: Laptop },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-gradient">
            Merahki.ai
          </h1>

          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {pages.map((page) => {
              const Icon = page.icon;
              const isActive = currentPage === page.id;
              
              return (
                <button
                  key={page.id}
                  onClick={() => onNavigate(page.id)}
                  className={cn(
                    "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300",
                    isActive
                      ? "bg-gradient-primary text-white shadow-glow-md"
                      : "bg-white/5 text-foreground/70 hover:bg-white/10"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm font-semibold">
                    {page.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default MainNav;
