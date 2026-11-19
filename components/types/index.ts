import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  children?: LinkType[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface HeaderData {
  logo: string;
  logo_alt: string;
  mail_label: string;
  email: string;
  email_href: string;
  call_label: string;
  phone: string;
  phone_href: string;
  social_label: string;
  socials: SocialLink[];
  links: LinkType[];
  button_text: string;
  button_href: string;
  menu_label: string;
  close_label: string;
}

export interface FooterData {
  logo: string;
  logo_alt: string;
  description: string;
  link_mark: string;
  call_label: string;
  phone: string;
  phone_href: string;
  links_title: string;
  links: LinkType[];
  contact_title: string;
  address: string;
  email: string;
  email_href: string;
  contact_phone: string;
  contact_phone_href: string;
  copyright: string;
  socials: SocialLink[];
}

export interface BackToTopData {
  aria_label: string;
}

export interface HeroSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  lead: string;
  image: string;
  image_alt: string;
}

export interface AboutSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  text: string;
  image: string;
  image_alt: string;
  badge_value: string;
  badge_label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  image: string;
  image_alt: string;
  href: string;
}

export interface ServicesSectionData {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  items: ServiceItem[];
}

export interface PartnerPoint {
  icon: string;
  title: string;
  text: string;
  color: string;
}

export interface PartnerSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  text: string;
  image: string;
  image_alt: string;
  ribbon: string;
  points: PartnerPoint[];
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface StatsSectionData {
  id: string;
  image: string;
  image_alt: string;
  items: StatItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  image_alt: string;
}

export interface TeamSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  prev_label: string;
  next_label: string;
  items: TeamMember[];
}

export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  text: string;
}

export interface ProcessSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  steps: ProcessStep[];
}

export interface TestimonialItem {
  image: string;
  image_alt: string;
  quote: string;
  name: string;
  role: string;
  stars: number;
}

export interface TestimonialsSectionData {
  id: string;
  title: string;
  title_accent: string;
  quote_mark: string;
  prev_label: string;
  next_label: string;
  items: TestimonialItem[];
}

export interface FaqSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  items: { question: string; answer: string }[];
}

export interface ContactSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  image: string;
  image_alt: string;
  side_image: string;
  side_alt: string;
  form_title: string;
  name_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
  service_placeholder: string;
  services: string[];
  message_placeholder: string;
  button_text: string;
  success_message: string;
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Logistics.templateComponents['template-1'];
export const pages = template.pages;
export const sections = {
  ...template.sections,
  header: data.common.Header,
  footer: data.common.Footer,
  backToTop: data.common.BackToTop,
};
