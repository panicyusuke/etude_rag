import React from 'react';
import { Document } from '../../types';
import { getDocumentIcon } from '../../utils/helpers';

interface DocumentItemProps {
    document: Document;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ document }) => {
    return (
        <div className="border border-neutral-200 p-4 rounded-lg hover:shadow-md transition duration-200 animate-slide-in">
            <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{getDocumentIcon(document.type)}</span>
                <h3 className="text-lg font-semibold text-neutral-800">{document.title}</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-2">
                {document.highlight.split(' ').map((word, index) => (
                    <span
                        key={index}
                        className={word.startsWith('[H]') ? 'bg-secondary-200 font-medium' : ''}
                    >
            {word.replace('[H]', '')}
          </span>
                ))}
            </p>
            <a
                href={document.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 hover:underline transition duration-200"
            >
                View document
            </a>
        </div>
    );
};

export default DocumentItem;
