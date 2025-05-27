import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation('app');

    const handleChange = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '3px',
                height: '100%',
                marginLeft: '10px',
            }}
        >
            <button
                style={{
                    padding: '6px 16px',
                    borderRadius: '4px',
                    border: '1px solid #4BC676',
                    background: '#4BC676',
                    color: '#fff',
                    fontWeight: 200,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                }}
                onClick={() => handleChange('en')}
            >
                English
            </button>
            <button
                style={{
                    padding: '6px 16px',
                    borderRadius: '4px',
                    border: '1px solid #4BC676',
                    background: '#fff',
                    color: '#4BC676',
                    fontWeight: 200,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                }}
                onClick={() => handleChange('de')}
            >
                Deutsch
            </button>
        </div>
    );
};

export default LanguageSwitcher;
