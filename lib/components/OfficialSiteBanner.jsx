import React from "react";

/**
 * Renders the standard official site banner indicating that this site is an
 * official government site.
 *
 * This component is usually rendered in the common {@link Header}. You should
 * only need to add this manually if you are implementing your own header.
 * In that case, this should be the element that is at the very top of the
 * window.
 *
 * For more information, please consult the
 * [U.S. Web Design Standards](https://standards.usa.gov).
 */
export default class OfficialSiteBanner extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: false
    };
  }

  /**
   * Toggles the visiblity of the content section.
   */
  toggleDetails() {
    this.setState({ contentVisible: !this.state.contentVisible });
  }

  /**
   * Renders the content of the accordion that expands when the user clicks
   * on the "Here's how you know" link.
   *
   * @returns {Node|String} The rendered DOM node or an empty string.
   */
  renderContent() {
    if (!this.state.contentVisible) {
      return "";
    }
    return (
      <div className="site-banner usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img
                  className="usa-banner__header-flag"
                  src="/assets/img/us_flag_small.png"
                  alt="U.S. flag" />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p className="usa-banner__header-action" aria-hidden="true">
                  Here’s how you know
                </p>
              </div>
              <button
                className="usa-accordion__button usa-banner__button"
                aria-expanded="false"
                aria-controls="gov-banner">
                <span className="usa-banner__button-text">
                  Here's how you know
                </span>
              </button>
            </div>
          </header>
          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner"
            hidden="">
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="/assets/img/icon-dot-gov.svg"
                  alt="Dot gov" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The .gov means it’s official.</strong>
                    <br />
                    Federal government websites often end in .gov or .mil.
                    Before sharing sensitive information, make sure you’re on a
                    federal government site.
                  </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="/assets/img/icon-https.svg"
                  alt="Https" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The site is secure.</strong>
                    <br />
                    The <strong>https://</strong> ensures that you are
                    connecting to the official website and that any information
                    you provide is encrypted and transmitted securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <div className="usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner-header">
            <div className="usa-grid usa-banner-inner">
              <img
                src="/assets/images/favicons/favicon-57.png"
                alt="U.S. Flag"
              />
              <p>An official website of the United States government</p>
              <button
                className="usa-accordion-button usa-banner-button"
                aria-expanded="false"
                aria-controls="gov-banner"
                onClick={this.toggleDetails.bind(this)}
              >
                <span className="usa-banner-button-text">
                  Here's how you know
                </span>
              </button>
            </div>
          </header>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
