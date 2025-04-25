
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

export interface CountryPrefix {
    en: string;
    de: string;
    prefix: string;
}

export interface CountryPrefixes {
    [key: string]: CountryPrefix;
}