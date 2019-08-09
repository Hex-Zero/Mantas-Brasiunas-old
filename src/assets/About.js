import React from "react"

const About = () => {
  return (
    <p className="About">
      About Me <br /> Authoring of Custom Snippets in Emmet 2.0 via the snippets.json file differs
      from the old way of doing the same in a few ways: Topic Old Emmet Emmet 2.0 Snippets vs
      Abbreviations Supports both in 2 separate properties called snippets and abbreviations The 2
      have been combined into a single property called snippets. See default HTML snippets and CSS
      snippets CSS snippet names Can contain : Do not use : when defining snippet names. It is used
      to separate property name and value when Emmet tries to fuzzy match the given abbreviation to
      one of the snippets. CSS snippet values Can end with ; Do not add ; at end of snippet value.
      Emmet will add the trailing ; based on the file type (css/less/scss vs sass/stylus) or the
      emmet preference set for css.propertyEnd, sass.propertyEnd, stylus.propertyEnd Cursor location
      or | can be used Use only textmate syntax like for tab stops and cursor locations HTML Emmet
      snippets HTML custom snippets are applicable to all other markup flavors like haml or jade.
      When snippet value is an abbreviation and not actual HTML, the appropriate transformations can
      be applied to get the right output as per the language type. For example, for an unordered
      list with a list item, if your snippet value is ul>li, you can use the same snippet in html,
      haml, jade or slim, but if your snippet value is then it will work only in html files. If you
      want a snippet for plain text, then surround the text with the . CSS Emmet snippets Values for
      CSS Emmet snippets should be a complete property name and value pair. CSS custom snippets are
      applicable to all other stylesheet flavors like scss, less or sass. Therefore, don't include a
      trailing ; at the end of the snippet value. Emmet will add it as needed based on whether the
      language requires it. Do not use : in the snippet name. : is used to separate property name
      and value when Emmet tries to fuzzy match the abbreviation to one of the snippets. Note: After
      making changes to the snippets.json file, remember to reload VS Code for it to take effect.
      Tab stops and cursors in custom snippets The syntax for tab stops in custom Emmet snippets
      follows the Textmate snippets syntax. Use , for tab stops and for tab stops with placeholders.
      Previously, | or was used to denote the cursor location in the custom Emmet snippet. This is
      no longer supported. Use instead. Emmet configuration
    </p>
  )
}

export default About
