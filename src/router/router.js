// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import PalestineIsraelWar from '../components/pages/PalestineIsraelWar.vue';
import AboutUs from '../components/pages/AboutUs.vue'; // Create corresponding components for other links
import ContactUs from '../components/pages/ContactUs.vue';
import Campaigns from '../components/pages/Campaigns.vue';
import JoinLDMF from '../components/pages/JoinLDMF.vue';
import News from '../components/pages/News.vue';
import SearchPage from '../components/pages/SearchPage';
import ClimateEmergencyPage from '@/components/campaigns/ClimateEmergencyPage.vue';
import MentalHealthPage from '@/components/campaigns/MentalHealthPage.vue';
import EqualityPage from '@/components/campaigns/EqualityPage.vue';
import EducationPage from '@/components/campaigns/EducationPage.vue';
import BrexitPage from '@/components/campaigns/BrexitPage.vue';
import HousingPage from '@/components/campaigns/HousingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/palestine-israel-war',
    name: 'PalestineIsraelWar',
    component: PalestineIsraelWar,
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: Campaigns,
  },
  {
    path: '/join',
    name: 'JoinLDMF',
    component: JoinLDMF,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  },
  {
    path: '/campaigns/climate-emergency',
    name: 'Climate Emergency',
    component: ClimateEmergencyPage,
  },
  {
    path: '/campaigns/mental-health',
    name: 'Mental Health',
    component: MentalHealthPage,
  },
  {
    path: '/campaigns/equality',
    name: 'Equality',
    component: EqualityPage,
  },
  {
    path: '/campaigns/education',
    name: 'Education',
    component: EducationPage,
  },
  {
    path: '/campaigns/Brexit',
    name: 'Brexit',
    component: BrexitPage,
  },
  {
    path: '/campaigns/housing',
    name: 'Housing',
    component: HousingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
