import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import './directory.style.scss';
import {connect} from 'react-redux'
import { createStructuredSelector} from 'reselect'
import {sectionSelector} from '../../Redux/directory/directory.selector'

const Directory =({sections})=>{
    return (
      <div className="directory-menu">
        {sections.map(({title, imageUrl, id, size, linkUrl}) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            url={linkUrl}
          />
        ))}
      </div>
    );
  }
const mapStateToProps = createStructuredSelector({
  sections: sectionSelector
});

export default connect(mapStateToProps) (Directory);
