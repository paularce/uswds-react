import React from "react";

import BaseContainer from "./BaseContainer";

export default class TypographyContainer extends React.Component
{
  render()
  {
    return (
      <BaseContainer {...this.props}>
        TODO
      </BaseContainer>
    );
  }
}

TypographyContainer.defaultProps = {
  title: "Typography",
  summary: "U.S. government websites have common typographic needs: clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. We recommend a font system that uses two open-source font families: Source Sans Pro and Merriweather, both of which are designed for legibility and can beautifully adapt to a variety of visual styles."
};
