import React from 'react';
import DocumentItem from './DocumentItem';
import { Document } from '../../types';

interface DocumentListProps {
    documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">関連ドキュメント（類似度順）</h2>
            {documents.map((document, index) => (
                <DocumentItem key={index} document={document} />
            ))}
        </div>
    );
};

export default DocumentList;
