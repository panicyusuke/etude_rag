export interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export interface Document {
    type: 'slack' | 'notion' | 'onedrive';
    title: string;
    link: string;
    highlight: string;
}
