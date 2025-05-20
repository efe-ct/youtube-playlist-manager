import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-4 px-6 text-muted-foreground">
      <div className="container-app flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} YouTube Playlist Manager
        </div>
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <Heart size={14} className="text-accent fill-accent" />
          <span>for YouTube enthusiasts</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;