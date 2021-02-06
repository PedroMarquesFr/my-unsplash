export interface ContextData {
    photoArray: any;
    doesDataExists:boolean;
    isFetching: boolean;
    handleFetchByQuery:(term:string)=>void ;
}

interface image {
    alt_description: string;
    blur_hash: string;
    categories: any[];
    color: string;
    created_at: string;
    current_user_collections: any[];
    description: string;
    height: number;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: {self: "https://api.unsplash.com/photos/s9CC2SKySJM", html: "https://unsplash.com/photos/s9CC2SKySJM", download: "https://unsplash.com/photos/s9CC2SKySJM/download", download_location: "https://api.unsplash.com/photos/s9CC2SKySJM/download"}
    promoted_at: string;
    sponsorship: any;
    tags: {type:string,title:string}[];
    updated_at: string;
    urls: {raw: "https://images.unsplash.com/photo-1434030216411-0b…HwxfHNlYXJjaHwxfHx0ZXN0fGVufDB8fHw&ixlib=rb-1.2.1", full: "https://images.unsplash.com/photo-1434030216411-0b…NlYXJjaHwxfHx0ZXN0fGVufDB8fHw&ixlib=rb-1.2.1&q=85", regular: "https://images.unsplash.com/photo-1434030216411-0b…HwxfHx0ZXN0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080", small: "https://images.unsplash.com/photo-1434030216411-0b…aHwxfHx0ZXN0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=400", thumb: "https://images.unsplash.com/photo-1434030216411-0b…aHwxfHx0ZXN0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200"}
    user: {id: "0m1FUFxIRLI", updated_at: "2021-02-06T12:04:13-05:00", username: "craftedbygc", name: "Green Chameleon", first_name: "Green", …}
    width: 5184
}

interface ApiRequest {
    results: image[];
    total:number;
    total_pages:number;
}