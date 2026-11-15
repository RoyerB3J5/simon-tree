export type ImageAsset = { src: string; width: number; height: number };
export type ShapehubTheme = 'shapehub-1' | 'shapehub-2';

// Original SVG exports from the project's current Figma file.
export type DesignIconName = 'location' | 'badge' | 'facebook' | 'instagram' | 'website' | 'contact' | 'services' | 'arrow-primary' | 'arrow-secondary';
export const designIcon = (theme: ShapehubTheme, name: DesignIconName) => `/icons/${theme}/${name}.svg`;

// Rasters are filled in after the original files have been supplied and measured.
export const profile: { logo: ImageAsset | null; location: string; tagline: string } = {
  logo: {
    src: '/images/shared/logo-simon-tree-services.webp',
    width: 1000,
    height: 377,
  },
  location: 'Orlando, Florida',
  tagline: 'Professional tree services you can trust.',
};

export const services: { title: string; image: ImageAsset | null }[] = [
  { title: 'Full Tree Service', image: { src: '/images/shared/services/full-tree-service.webp', width: 800, height: 600 } },
  { title: 'Brush Cutting', image: { src: '/images/shared/services/brush-cutting.webp', width: 800, height: 600 } },
  { title: 'Stump Grinding', image: { src: '/images/shared/services/stump-grinding..webp', width: 800, height: 600 } },
  { title: 'Storm Clean-Up', image: { src: '/images/shared/services/storm-clean-up.webp', width: 800, height: 600 } },
  { title: 'Tree Removal', image: { src: '/images/shared/services/tree-removal.webp', width: 800, height: 600 } },
  { title: 'Emergency Services', image: { src: '/images/shared/services/emergency-services.webp', width: 800, height: 600 } },
  { title: 'Mulch', image: { src: '/images/shared/services/mulch.webp', width: 800, height: 600 } },
  { title: 'Firewood', image: { src: '/images/shared/services/firewood.webp', width: 800, height: 600 } },
];

// Destinations are intentionally unset until provided by the client.
export const links: { label: string; href: string | null; icon: DesignIconName }[] = [
  { label: 'Facebook', href: null, icon: 'facebook' },
  { label: 'Instagram', href: null, icon: 'instagram' },
  { label: 'Website', href: null, icon: 'website' },
  { label: 'Save Contact', href: null, icon: 'contact' },
  { label: 'Our Services', href: null, icon: 'services' },
];
