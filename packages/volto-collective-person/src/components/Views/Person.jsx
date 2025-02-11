import { Container as SemanticContainer, Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import emailSVG from '@plone/volto/icons/email.svg';
import mobileSVG from '@plone/volto/icons/mobile.svg';
import addRoleSVG from '@plone/volto/icons/add-user.svg';
import { Icon } from '@plone/volto/components';
import '../../theme/person.css';

const PersonView = (props) => {
  const { content } = props;
  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;
  return (
    <>
      <Container className="personContainer">
        <div id="personPage" className="divPersonPage">
          <h1 className="documentFirstHeading personFirstHeading">
            <span>{content.title}</span>
          </h1>
          <div className="divPersonDetail">
            <div className="personPageImage">
              {content.image?.scales?.large ? (
                <Image
                  src={flattenToAppURL(content.image?.scales?.large?.download)}
                  alt={content.title}
                />
              ) : (
                <Image
                  src={DefaultImageSVG}
                  alt="no image found"
                  style={{ maxWidth: '300px' }}
                />
              )}
            </div>
            <div className="personPageDetails">
              <div className="personPagePrimaryRole">
                {
                  content.roles?.map((item) => {
                    return (
                      <h2
                        className="personPagePrimRoleHeader"
                        key={item['@id']}
                      >
                        <span>{item.title}</span>
                      </h2>
                    );
                  })[0]
                }
              </div>
              <div className="personPageDetailRows">
                {content.roles?.length > 1 && (
                  <p>
                    <Icon
                      name={addRoleSVG}
                      size="24px"
                      alt="Additional job roles"
                    />
                  </p>
                )}
                {content.roles
                  ?.slice(1)
                  .filter((item) => item.index !== 0)
                  .map((item) => {
                    return (
                      <p className="personPageIconPadding" key={item['@id']}>
                        {item.title}
                      </p>
                    );
                  })}
              </div>
              <div className="personPageDetailRows">
                <UniversalLink
                  title={content.contact_email}
                  href={`mailto:${content.contact_email}`}
                  className="flexrow_nowrap"
                >
                  <p>
                    <Icon name={emailSVG} size="24px" />
                  </p>
                  <p className="personPageIconPadding">
                    {content.contact_email}
                  </p>
                </UniversalLink>
              </div>
              <div className="personPageDetailRows">
                <UniversalLink
                  title={content.contact_phone}
                  href={`tel:${content.contact_phone}`}
                  className="flexrow_nowrap"
                >
                  <p>
                    <Icon name={mobileSVG} size="24px" />
                  </p>
                  <p className="personPageIconPadding">
                    {content.contact_phone}
                  </p>
                </UniversalLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PersonView;
