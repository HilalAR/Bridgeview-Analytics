
import React from 'react';

export enum Page {
  Home = 'home',
  Dashboards = 'dashboards',
  Sectors = 'sectors',
  About = 'about',
  Cases = 'cases',
  Contact = 'contact'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}
