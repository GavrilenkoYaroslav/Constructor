import React from 'react';
import {StructureGroup} from "./StructureGroup";

export const Structure = ({structure, itemSelected}) => {

    return (
        <>
            {!!structure && structure.map((group, i) =>
                <StructureGroup key={i} group={group} onClick={itemSelected}/>
            )}
        </>
    );
};