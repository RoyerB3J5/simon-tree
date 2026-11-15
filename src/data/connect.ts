import type { ImageAsset } from './shapehub';

export type ConnectCard = {
  id: 'info' | 'feedback';
  label: string;
  title: string;
  description: string;
  modalTitle: string;
  image: ImageAsset | null;
};

// The QR images are added after the originals are supplied and measured.
export const connectCards: ConnectCard[] = [
  {
    id: 'info',
    label: 'INFO',
    title: 'Give me a review',
    description: 'Scan to view our profile, social media, and contact info.',
    modalTitle: 'Scan me for info',
    image: null,
  },
  {
    id: 'feedback',
    label: 'FEEDBACK',
    title: 'Give me a review',
    description: 'Scan to leave a review and share your experience.',
    modalTitle: 'Scan me for feedback',
    image: null,
  },
];
