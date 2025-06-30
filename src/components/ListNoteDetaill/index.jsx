import React, { useState } from 'react';
import './index.css';
import ItemNoteDetail from '../ItemNoteDetail';

const ListNoteDetail = () => {
    const [count, setCount] = useState("hola")

    return(
        <div>
            <div>
                <div>
                    title
                </div>
                <div>
                    count note
                </div>
            </div>
            <div>
                <ItemNoteDetail texto={count} />
            </div>
        </div>
    );
};

export default ListNoteDetail;

