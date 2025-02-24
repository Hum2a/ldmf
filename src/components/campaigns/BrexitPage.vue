<template>
  <campaign-template :campaign="campaignData" />
</template>

<script>
import CampaignTemplate from './CampaignTemplate.vue';

export default {
  name: 'BrexitPage',
  components: {
    CampaignTemplate
  },
  data() {
    return {
      campaignData: {
        title: 'Fighting Brexit',
        category: 'Policy',
        subtitle: "Our continued fight for a closer relationship with Europe and the protection of citizens' rights.",
        // heroImage: require('../../assets/brexit-hero.jpg'),
        supporters: '15,000+',
        progress: 65,
        daysLeft: 180,
        overview: "The Liberal Democrats have consistently opposed Brexit, advocating for a closer relationship with the EU to protect economic stability, environmental standards, and citizens' rights. We are committed to ensuring the UK remains outward-looking and cooperative in its dealings with Europe.",
        keyPoints: [
          {
            icon: 'fas fa-handshake',
            title: 'Economic Partnership',
            description: 'Working towards stronger trade relationships and reduced barriers with the EU.'
          },
          {
            icon: 'fas fa-users',
            title: 'Citizens Rights',
            description: 'Protecting the rights of EU citizens in the UK and UK citizens in the EU.'
          },
          {
            icon: 'fas fa-leaf',
            title: 'Environmental Standards',
            description: 'Maintaining high environmental standards and cooperation on climate action.'
          }
        ],
        // overviewImage: require('../../assets/brexit-overview.jpg'),
        milestones: [
          {
            date: 'January 2023',
            title: 'Campaign Launch',
            description: 'Initiated our renewed campaign for closer EU ties.'
          },
          {
            date: 'March 2023',
            title: 'Policy Paper',
            description: 'Published comprehensive proposals for improved EU relations.'
          },
          {
            date: 'June 2023',
            title: 'National Rally',
            description: 'Organized nationwide demonstrations supporting EU cooperation.'
          },
          {
            date: 'September 2023',
            title: 'Parliamentary Motion',
            description: 'Introduced motion for enhanced European partnership.'
          }
        ],
        impacts: [
          {
            icon: 'fas fa-chart-line',
            title: 'Economic Growth',
            description: 'Supporting businesses through improved trade relations.'
          },
          {
            icon: 'fas fa-globe-europe',
            title: 'International Cooperation',
            description: 'Strengthening ties with European partners.'
          },
          {
            icon: 'fas fa-shield-alt',
            title: 'Rights Protection',
            description: 'Safeguarding citizens rights and freedoms.'
          }
        ],
        relatedCampaigns: [
          {
            title: 'Environmental Protection',
            description: 'Fighting for stronger environmental standards post-Brexit.',
            // image: require('../../assets/environment-campaign.jpg'),  
            link: '/campaigns/environment'
          },
          {
            title: 'Trade Relations',
            description: 'Campaign for reduced trade barriers with the EU.',
            // image: require('../../assets/trade-campaign.jpg'),
            link: '/campaigns/trade'
          },
          {
            title: 'Citizens Rights',
            description: 'Protecting the rights of EU and UK citizens.',
            // image: require('../../assets/citizens-campaign.jpg'),
            link: '/campaigns/citizens-rights'
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
#brexit-campaign {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #f9f9f9;
  text-align: center;
}

/* Header Section */
.header-container {
  padding: 20px;
  background: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
}

.LibDemLogo {
  max-width: 180px;
  margin-right: 10px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.lib-dem {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.muslim-forum {
  font-size: 18px;
  color: #000;
}

/* Hero Section */
.hero {
  padding: 50px;
  color: #000;
  background: linear-gradient(135deg, #ffcc00, #ffe600);
  position: relative;
  overflow: hidden;
}

.hero-content {
  z-index: 2;
  position: relative;
}

.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, rgba(255, 204, 0, 0.6), rgba(255, 230, 0, 0.6));
  animation: moveBackground 5s infinite linear;
}

@keyframes moveBackground {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.cta-button {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #fff700, #ffe600);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Campaign Details Section */
.campaign-details {
  padding: 40px;
  background: #fff;
}

.details-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.details-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Key Actions Section */
.key-actions {
  padding: 40px;
  background: #f9f9f9;
}

.key-actions h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.action-item {
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.action-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.action-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

/* CTA Section */
.cta-section {
  padding: 40px;
  background: linear-gradient(135deg, #ffe600, #ffcc00);
}

.cta-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 16px;
  margin-bottom: 20px;
}

.pulse-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #fff700, #ffe600);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: pulse 1.5s infinite;
}

.pulse-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Footer Section */
.footer {
  padding: 20px;
  background: #000;
  color: #ffe600;
}

.footer a {
  color: #ffe600;
  font-weight: bold;
  transition: color 0.3s;
}

.footer a:hover {
  color: #fff;
}

/* Animations */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
