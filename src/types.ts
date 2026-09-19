export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  highlightSummary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud' | 'database' | 'agile' | 'governance';
  badgeColor: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface ProfileData {
  name: string;
  headline: string;
  subHeadline: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  yearsOfExperience: string;
  summary: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  skillsCategories: SkillCategory[];
  certifications: CertificationItem[];
  experiences: ExperienceItem[];
  education: {
    institution: string;
    degree: string;
    field: string;
    location: string;
  };
}
