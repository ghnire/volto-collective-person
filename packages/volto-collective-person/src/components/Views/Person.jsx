import { Container as SemanticContainer, Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';
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
      <Container>
        <div id="personPage">
          <h1 className="documentFirstHeading personFirstHeading">
            <span>{content.title}</span>
          </h1>
          <div className="divPersonPage">
            <div className="personPageImage">
              {content.image?.scales?.mini ? (
                <Image
                  src={flattenToAppURL(content.image?.scales?.mini?.download)}
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
                      <h2>
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
                {content.roles?.slice(1).map((item) => {
                  {
                    item.index != 0;
                  }
                  return <p className="personPageIconPadding">{item.title}</p>;
                })}
              </div>
              <div className="personPageDetailRows">
                <p>
                  <Icon name={emailSVG} size="24px" />
                </p>
                <p className="personPageIconPadding">
                  <a href={`mailto:${content.contact_email}`}>
                    {content.contact_email}
                  </a>
                </p>
              </div>
              <div className="personPageDetailRows">
                <p>
                  <Icon name={mobileSVG} size="24px" />
                </p>
                <p className="personPageIconPadding">
                  <a href={`tel:${content.contact_phone}`}>
                    {content.contact_phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PersonView;
