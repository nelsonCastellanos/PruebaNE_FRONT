import React from "react";
import './index.css';

const ItemNoteCount = ({title, description, icon})=> {
  return (
   <div>
        <div>
            <div>
                <div>
                    {title}
                </div>
                <div>
                    {description}
                </div>
            </div>
                <div>
                    {icon}
                </div>
        </div>
   </div>
  );
};

export default ItemNoteCount;