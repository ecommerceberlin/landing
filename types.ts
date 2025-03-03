
export interface NowPlaying {
    enabled: boolean;
    baseLabel: string;
    link: string;
}

export interface PremiumItem {
    label: string;
    ticketId: number;
    thumbnail: string;
    media: string[];
}