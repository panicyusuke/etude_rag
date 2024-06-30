export const truncateString = (str: string, num: number): string => {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
};

export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};

export const getDocumentIcon = (type: string): string => {
    switch (type) {
        case 'slack':
            return '💬';
        case 'notion':
            return '📝';
        case 'onedrive':
            return '💾';
        default:
            return '📄';
    }
};
