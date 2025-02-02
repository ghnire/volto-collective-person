import { Image } from 'semantic-ui-react';
import { UniversalLink, Icon } from '@plone/volto/components';
import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';

import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import '../../../theme/personListing.css';

const PersonCardView = ({ items, linkTitle, linkHref, isEditMode }) => {
  let link = null;
  let href = linkHref?.[0]?.['@id'] || '';
  if (isInternalURL(href)) {
    link = (
      <ConditionalLink to={flattenToAppURL(href)} condition={!isEditMode}>
        {linkTitle || href}
      </ConditionalLink>
    );
  } else if (href) {
    link = <a href={href}>{linkTitle || href}</a>;
  }

  return (
    <>
      <div className="listing-person-items">
        {items.map((item) => {
          return (
            <div className="listing-person-item" key={item['@id']}>
              <ConditionalLink
                item={item}
                condition={!isEditMode}
                className="listing-link"
              >
                <div className="person-card">
                  {item.image_scales ? (
                    <div>
                      <Image
                        src={`${item['@id']}/${item.image_scales.image[0].scales.mini.download}`}
                        className="person-card-image"
                      />
                    </div>
                  ) : (
                    <Image
                      src={DefaultImageSVG}
                      alt="no image found"
                      className="person-card-image"
                    />
                  )}
                  <div className="person-card-content">
                    <h3>
                      <UniversalLink href={item['@id']}>
                        {item.title}
                      </UniversalLink>
                    </h3>
                  </div>
                </div>
              </ConditionalLink>
            </div>
          );
        })}
      </div>

      {link && <div className="footer">{link}</div>}
    </>
  );
};

PersonCardView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default PersonCardView;
