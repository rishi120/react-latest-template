import React from 'react';
import { UseLoginProvider } from '../../utils/Hooks/Auth';


export default function Dashboard() {
    const { storePassword, name, headingStyle, spanElementStyles } = UseLoginProvider();

    return (
        <h1 style={{ fontSize: headingStyle.fontSize }}>{storePassword}<span style={{ fontSize: spanElementStyles.fontSize, paddingLeft: spanElementStyles.paddingLeft }}>{name}</span></h1>
    )
}
