import React from 'react';
import { UseLoginProvider } from '../../utils/Hooks/Auth';

export default function Dashboard() {
    const { storePassword } = UseLoginProvider();
    return (
        <h1>{storePassword}</h1>
    )
}
