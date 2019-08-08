import React from "react"
import styled from "styled-components"
import VideoCards from "./VideoCards"
import angelOne from "../assets/topcarousel/angelOne.jpg"
import angelTwo from "../assets/topcarousel/angelTwo.jpg"
import angelThree from "../assets/topcarousel/angelThree.jpg"
import blade from "../assets/topcarousel/blade.gif"

const Projects = () => {
  return (
    <Styled>
      <Title>My Projects</Title>
      <div className="fbox">
        <VideoCards
          url={angelOne}
          title={"Fancy angel"}
          content={"Red heared angel with Yellow wings"}
        />
        <VideoCards
          url={angelTwo}
          title={"Fancy angel"}
          content={"Red heared angel with Yellow wings"}
        />
        <VideoCards url={blade} title={"Blade and Soul"} content={"Action packed anime series"} />

        <VideoCards
          url={angelThree}
          title={"Blade and Soul"}
          content={"Action packed anime series"}
        />
        <p className="About">
          About Me <br /> Authoring of Custom Snippets in Emmet 2.0 via the snippets.json file
          differs from the old way of doing the same in a few ways: Topic Old Emmet Emmet 2.0
          Snippets vs Abbreviations Supports both in 2 separate properties called snippets and
          abbreviations The 2 have been combined into a single property called snippets. See default
          HTML snippets and CSS snippets CSS snippet names Can contain : Do not use : when defining
          snippet names. It is used to separate property name and value when Emmet tries to fuzzy
          match the given abbreviation to one of the snippets. CSS snippet values Can end with ; Do
          not add ; at end of snippet value. Emmet will add the trailing ; based on the file type
          (css/less/scss vs sass/stylus) or the emmet preference set for css.propertyEnd,
          sass.propertyEnd, stylus.propertyEnd Cursor location or | can be used Use only textmate
          syntax like for tab stops and cursor locations HTML Emmet snippets HTML custom snippets
          are applicable to all other markup flavors like haml or jade. When snippet value is an
          abbreviation and not actual HTML, the appropriate transformations can be applied to get
          the right output as per the language type. For example, for an unordered list with a list
          item, if your snippet value is ul>li, you can use the same snippet in html, haml, jade or
          slim, but if your snippet value is then it will work only in html files. If you want a
          snippet for plain text, then surround the text with the . CSS Emmet snippets Values for
          CSS Emmet snippets should be a complete property name and value pair. CSS custom snippets
          are applicable to all other stylesheet flavors like scss, less or sass. Therefore, don't
          include a trailing ; at the end of the snippet value. Emmet will add it as needed based on
          whether the language requires it. Do not use : in the snippet name. : is used to separate
          property name and value when Emmet tries to fuzzy match the abbreviation to one of the
          snippets. Note: After making changes to the snippets.json file, remember to reload VS Code
          for it to take effect. Tab stops and cursors in custom snippets The syntax for tab stops
          in custom Emmet snippets follows the Textmate snippets syntax. Use , for tab stops and for
          tab stops with placeholders. Previously, | or was used to denote the cursor location in
          the custom Emmet snippet. This is no longer supported. Use instead. Emmet configuration{" "}
        </p>
      </div>
    </Styled>
  )
}

const Title = styled.h1`
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  width: 190px;
  border: solid 4px #4ec3c9;
  border-radius: 4px;
  padding: 5px 10px 7px 10px;
  color: #4ec3c9;
  text-shadow: 1px 1px gray;
  box-shadow: 2px 2px #555;
  &:hover {
    background-color: whitesmoke;
  }
`

const Styled = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  .About {
    margin: 0 1%;
    margin-top: 40px;
    text-align: center;
    width: 720px;
    border: solid 4px #4ec3c9;
    border-radius: 4px;
    padding: 5px 10px;
    color: #4ec3c9;

    box-shadow: 2px 2px #555;
    font-size: 14px;
  }

  .fbox {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    margin-top: 2vw;
    margin-left: 2vw;
    width: 450px;
    height: 250px;
    border: solid 2px gray;
    border-radius: 6px;
    &:hover {
      border: solid 2px #ff6a00;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-left: 15%;
    margin-right: 15%;
    .card {
      width: 350px;
      height: 190px;
    }
  }
`

export default Projects
