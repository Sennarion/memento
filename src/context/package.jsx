'use client';

import { createContext, useContext, useState } from 'react';

const PackageCtx = createContext(null);

export function PackageProvider({ children }) {
	const [pkg, setPkg] = useState('');
	return <PackageCtx.Provider value={{ pkg, setPkg }}>{children}</PackageCtx.Provider>;
}

export function usePackage() {
	return useContext(PackageCtx);
}
