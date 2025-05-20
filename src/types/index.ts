export interface Resource {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tag: string;
  readTime: string;
  slug: string;
  content: string;
}

export interface Foundation {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

export interface Lab {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  duration: string;
  icon: React.ComponentType<any>;
}