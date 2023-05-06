import { FontSource, loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { useEffect } from 'react';

export const useCachedResources = (
	fontMap: Record<string, FontSource>,
): boolean => {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	useEffect(() => {
		const loadResourcesAsync = async (): Promise<void> => {
			try {
				const fontPromise = loadAsync(fontMap);

				await Promise.all([fontPromise]);
			} catch (error) {
				console.warn(error);
			} finally {
				await SplashScreen.hideAsync();
				setLoadingComplete(true);
			}
		};

		void loadResourcesAsync();
	}, [fontMap]);

	return isLoadingComplete;
};
