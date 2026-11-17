import type { ImageAsset } from './shapehub';

export type ConnectCard = {
  id: 'info' | 'feedback';
  label: string;
  title: string;
  description: string;
  modalTitle: string;
  image: ImageAsset | null;
};

export const connectCards: ConnectCard[] = [
  {
    id: 'info',
    label: 'INFO',
    title: 'Give me a review',
    description: 'Scan to view our profile, social media, and contact info.',
    modalTitle: 'Scan me for info',
    image: { src: '/images/shared/qr/info.png', width: 917, height: 917 },
  },
  {
    id: 'feedback',
    label: 'FEEDBACK',
    title: 'Give me a review',
    description: 'Scan to leave a review and share your experience.',
    modalTitle: 'Scan me for feedback',
    image: { src: '/images/shared/qr/feedback.png', width: 917, height: 917 },
  },
];
