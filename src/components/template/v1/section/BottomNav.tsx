import { BookOpen, Calendar, Gift, Home, Users } from "lucide-react";

const BottomNav = ({ activeSection }: { activeSection: string }) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "couple", icon: Users, label: "Mempelai" },
    { id: "event", icon: Calendar, label: "Acara" },
    { id: "wishes", icon: BookOpen, label: "Ucapan" },
    { id: "gift", icon: Gift, label: "Hadiah" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-cream backdrop-blur-md shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] z-10 md:hidden">
      <div className="container mx-auto h-full flex justify-around items-center">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex flex-col items-center justify-center gap-1 transition-colors duration-300 ${
              activeSection === item.id ? "text-secondary" : "text-gray-500"
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
