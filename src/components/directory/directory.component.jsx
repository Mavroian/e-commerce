import React from "react";
import "./directory.styles.scss"
import MenuItems from "../menu-items/menu-items.component"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectDirectorySections } from "../../redux/directory/directory.selector"

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItems key={id} {...sectionProps} />
      ))}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)