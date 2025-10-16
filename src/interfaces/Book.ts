export interface IImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
}

export interface IVolumeInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    categories?: string[];
    language?: string;
    imageLinks?: IImageLinks;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
}

export interface IPdfInfo {
    isAvailable: boolean;
    acsTokenLink?: string;
}

export interface IBook {
    id: string;
    volumeInfo: IVolumeInfo;
    pdf?: IPdfInfo;
}
