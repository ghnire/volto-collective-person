import { PersonView } from './components';
import PersonCardView from './components/Blocks/Listing/PersonCardView';

const applyConfig = (config) => {
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'listingPersonView',
      title: 'Person list',
      template: PersonCardView,
    },
  ];
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      Person: PersonView,
    },
  };
  return config;
};

export default applyConfig;
