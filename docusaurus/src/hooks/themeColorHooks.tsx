import { useColorMode } from '@docusaurus/theme-common';

export const useBgPrimary = (): string => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? 'bg-secondary' : 'bg-primary';
};

export const useHeroTextColor = (): string => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? 'text-black' : 'text-white';
};

export const useTextColor = (): string => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? 'text-white' : 'text-black';
};
